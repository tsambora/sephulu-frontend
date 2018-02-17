import React from 'react';
import PropTypes from 'prop-types';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';

export default function ProductCard({ colorIndex, onTileClicked, product, thumbnail }) {
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
        category: {category}
      </Heading>
    </div>
  );

  return (
    <Card
      colorIndex={colorIndex}
      description={description}
      label={name}
      onClick={onTileClicked ? () => onTileClicked(product.id) : null}
      thumbnail={thumbnail}
    />
  );
};

ProductCard.propTypes = {
  colorIndex: PropTypes.string,
  onTileClicked: PropTypes.func,
  product: PropTypes.object.isRequired,  
  thumbnail: PropTypes.string,
};
