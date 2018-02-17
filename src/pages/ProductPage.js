import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Spinning from 'grommet/components/icons/Spinning';

import {
  fetchProduct,
} from '../actions/actions';
import ProductCard from '../components/ProductCard';

class ProductPage extends Component {
  componentDidMount() {
    const { product } = this.props;
    if (!product) {
      const { params } = this.props.match;
      this.props.dispatch(fetchProduct(params.id));
    }
  }

  render() {
    const { product, isFetching: isLoading } = this.props;
    let content;

    if (!product || isLoading) {
      content = (
        <Box
          align='center'
          full
          justify='center'
        >
          <Heading>
            loading product <Spinning />
          </Heading>
        </Box>
      );
    } else {
      content = (
        <Hero
          background={
            <Image
              fit='cover'
              full
              src='http://via.placeholder.com/1000x500'
            />
          }
          backgroundColorIndex='dark'
        >
          <Box
            align='center'
            direction='row'
            justify='center'
          >
            <Box 
              align='end'
              basis='1/2'
              pad='medium'
            />
            <Box
              align='start'
              basis='1/2'
              pad='medium'
            >
              <Box colorIndex='grey-2-a'>
                <ProductCard product={product} />
              </Box>
            </Box>
          </Box>
        </Hero>
      );
    }

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

ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,  
  isFetching: PropTypes.bool.isRequired,  
  match: PropTypes.object.isRequired,
  product: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  const { items, isFetching } = state.products;
  const { params } = ownProps.match;
  const product = items.find(product => product.id === params.id);

  return {
    product,
    isFetching,
  };
}

export default connect(mapStateToProps)(ProductPage);
