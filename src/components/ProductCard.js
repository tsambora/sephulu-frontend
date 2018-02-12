import React from 'react';
import PropTypes from 'prop-types';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';

export default function ProductCard({ product }) {
  const { name, price, under_sale: underSale, sale_price: salePrice, category } = product.attributes || {};
  const computedPrice = underSale ?
    price - salePrice
    : price;
  const displayPrice = `$${computedPrice}${underSale ? ` ($${salePrice} off)` : ''}`;
  const description = (
    <div>
      <Heading
        tag='h3'
      >
        {displayPrice}
      </Heading>
      <Heading
        tag='h3'
      >
        in {category}
      </Heading>
    </div>
  )

  return (
    <Card
      colorIndex='light-1'
      description={description}
      label={name}
      thumbnail='http://via.placeholder.com/200x100'
    />
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,  
};
