import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
  fetchProducts,
} from '../actions/actions';
import Section from 'grommet/components/Section';

import ProductTiles from '../components/ProductTiles';

const categories = [
  'tools',
  'brushes',
  'markup',
];

class CatalogPage extends Component {
  componentDidMount() {
    const { search } =  this.props.location;
    const queries = queryString.parse(search);
    const { page = 1, category } = queries;
    
    const filter = {
      page,
      category,
    };

    this.props.dispatch(fetchProducts(filter));
  }

  getProductQueries() {
    const { history, location, products } = this.props;
    const { search } = location;
    const queries = queryString.parse(search);
    const { page: pageQuery, category } = queries;
    const page = parseInt(pageQuery, 10) || 1;
    const { hasNext } = products;
    
    const onCatChange = (cat) => history.push(`/?page=1&category=${cat}`);
    
    const catPath = category ? `&category=${category}` : '';
    const onPrevPage = () => history.push(`/?page=${page - 1}${catPath}`);
    const onNextPage = () => history.push(`/?page=${page + 1}${catPath}`);
    
    return {
      categories,
      category,
      hasNext,
      onCatChange,
      onNextPage,
      onPrevPage,
      page,
    };
  }

  render() {
    const { isFetching, items } = this.props.products || {};
    const queries = this.getProductQueries();

    return (
      <Section
        colorIndex='light-2'
        full
      >
        <ProductTiles
          isLoading={isFetching}
          items={items}
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
