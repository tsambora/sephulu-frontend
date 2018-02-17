import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Section from 'grommet/components/Section';

import {
  fetchProducts,
} from '../actions/actions';
import ProductTiles from '../components/ProductTiles';

const categories = [
  'tools',
  'brushes',
  'markup',
];

const prices = [
  { value: '1000', label: '< 1000' },
  { value: '2000', label: '< 2000' },
  { value: '3000', label: '< 3000' },
  { value: '4000', label: '< 4000' },
  { value: '5000', label: '< 5000' },
  { value: '10000', label: '< 10000' }
];

const sortFroms = [
  { value: '-price', label: 'Most expensive' },
  { value: 'price', label: 'Cheapest' },
];

class CatalogPage extends Component {
  constructor() {
    super();

    this.handleTileClicked = this.handleTileClicked.bind(this);
  }

  componentDidMount() {
    const { search } =  this.props.location;
    const queries = queryString.parse(search);
    const { page = 1, category, priceLt, sortFrom } = queries;
    
    const filter = {
      page,
      category,
      priceLt,
      sortFrom
    };

    this.props.dispatch(fetchProducts(filter));
  }

  getProductQueries() {
    const { history, location, products } = this.props;
    const { search } = location;
    const queries = queryString.parse(search);
    const { page: pageQuery, category, priceLt, sortFrom } = queries;
    const page = parseInt(pageQuery, 10) || 1;
    const { hasNext } = products;
        
    const catPath = category ? `&category=${category}` : '';
    const priceLtPath = priceLt ? `&priceLt=${priceLt}` : '';
    const sortFromPath = sortFrom ? `&sortFrom=${sortFrom}` : '';

    const onPrevPage = () => history.push(`/?page=${page - 1}${catPath}${priceLtPath}${sortFromPath}`);
    const onNextPage = () => history.push(`/?page=${page + 1}${catPath}${priceLtPath}${sortFromPath}`);
    const onCatChange = (cat) => history.push(`/?page=1&category=${cat}${priceLtPath}${sortFromPath}`);
    const onPriceChange = (price) => history.push(`/?page=1${catPath}&priceLt=${price}${sortFromPath}`);
    const onSortFromChange = (sortFrom) => history.push(`/?page=1${catPath}${priceLtPath}&sortFrom=${sortFrom}`);
    const onClearFilter = () => {
      if (!!category || !!priceLt || !!sortFrom) {
        history.push(`/`);
      }
    };
    
    return {
      categories,
      category,
      hasNext,
      onCatChange,
      onClearFilter,
      onNextPage,
      onPrevPage,
      onPriceChange,
      onSortFromChange,
      page,
      priceLt,
      prices,
      sortFrom,
      sortFroms,
    };
  }

  handleTileClicked(productId) {
    const { history } = this.props;
    history.push(`/products/${productId}`);
  }

  render() {
    const { isFetching, items, error } = this.props.products || {};
    const queries = this.getProductQueries();

    return (
      <Section
        colorIndex='light-2'
        full
      >
        <ProductTiles
          error={error}
          isLoading={isFetching}
          items={items}
          onTileClicked={this.handleTileClicked}
          queries={queries}
        />
      </Section>
    );
  }
};

CatalogPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,  
  products: PropTypes.object.isRequired,  
};

function mapStateToProps(state) {
  const { products } = state;

  return {
    products,
  };
}

export default connect(mapStateToProps)(CatalogPage);
