import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchProducts,
} from '../actions/actions';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

import ProductTiles from '../components/ProductTiles';

class CatalogPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { isFetching, items } = this.props.products || {};
    let content;

    if (isFetching) {
      content = <Heading>loading products...</Heading>;
    } else {
      content = <ProductTiles items={items} />;
    };

    return (
      <Section
        colorIndex='light-2'
        full
      >
        {content}
      </Section>
    );
  }
};

CatalogPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,  
};

function mapStateToProps(state) {
  const { products } = state;

  return {
    products,
  };
}

export default connect(mapStateToProps)(CatalogPage);
