import React from 'react';
import PropTypes from 'prop-types';
import Card from 'grommet/components/Card';

export default function ProductCard({ product }) {
  const { name, price, under_sale: underSale, sale_price: salePrice } = product.attributes || {};
  const computedPrice = underSale ?
    price - salePrice
    : price;
  const displayPrice = `$${computedPrice}${underSale ? ` ($${salePrice} off)` : ''}`;

  return (
    <Card
      colorIndex='light-1'
      description={displayPrice}
      label={name}
      thumbnail='http://via.placeholder.com/200x100'
    />
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,  
};
