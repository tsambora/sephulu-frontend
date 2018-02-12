import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const { params } =  this.props.match;
    const { page = 1, category } = params;
    
    this.handleFetchProducts(page, category);
  }

  componentDidUpdate(prevProps) {
    const { params } =  this.props.match;
    const { page, category } = params;
    
    const { params: prevParams } = prevProps.match;
    const { page: prevPage, category: prevCategory } = prevParams;

    if (page !== prevPage || category !== prevCategory) {
      this.handleFetchProducts(page, category);
    }
  }

  handleFetchProducts(page, category) {
    const filter = {
      page,
      category,
    };

    this.props.dispatch(fetchProducts(filter));
  }

  getProductQueries() {
    const { history, match, products } = this.props;
    const { params } = match;
    const { page: pageParam, category } = params;
    const page = parseInt(pageParam, 10) || 1;
    const { hasNext } = products;

    const catPath = category ? `/${category}` : '';
    const onCatChange = (cat) => history.push(`/1/${cat}`);
    
    const prevUrl = `/${page - 1}${catPath}`;
    const nextUrl = `/${page + 1}${catPath}`;
    const onPrevPage = () => history.push(prevUrl);
    const onNextPage = () => history.push(nextUrl);
    
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
  match: PropTypes.object.isRequired,  
  products: PropTypes.object.isRequired,  
};

function mapStateToProps(state) {
  const { products } = state;

  return {
    products,
  };
}

export default connect(mapStateToProps)(CatalogPage);
