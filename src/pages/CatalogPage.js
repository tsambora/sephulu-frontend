import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchProducts,
} from '../actions/actions';
import Section from 'grommet/components/Section';

import ProductTiles from '../components/ProductTiles';

class CatalogPage extends Component {
  componentDidMount() {
    const { params } =  this.props;
    const { page } = params;
    this.handleFetchProducts(page);
  }

  componentDidUpdate(prevProps) {
    const { params } =  this.props;
    const { page } = params;
    
    const { params: prevParams } = prevProps;
    const { page: prevPage } = prevParams;

    if (page !== prevPage) {
      this.handleFetchProducts(page);
    }
  }

  handleFetchProducts(page) {
    const filter = {
      page: page || 1,
    };

    this.props.dispatch(fetchProducts(filter));
  }

  render() {
    const { isFetching, items, hasNext } = this.props.products || {};
    
    const { params } = this.props;
    const page = parseInt(params.page, 10) || 1;
    const navParams = {
      hasNext: hasNext || false,
      nextUrl: `/${page + 1}`,
      page: page,
      prevUrl: `/${page - 1}`,
    };

    return (
      <Section
        colorIndex='light-2'
        full
      >
        <ProductTiles
          isLoading={isFetching}
          items={items}
          navParams={navParams}
        />
      </Section>
    );
  }
};

CatalogPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,  
  products: PropTypes.object.isRequired,  
};

function mapStateToProps(state) {
  const { products } = state;

  return {
    products,
  };
}

export default connect(mapStateToProps)(CatalogPage);
