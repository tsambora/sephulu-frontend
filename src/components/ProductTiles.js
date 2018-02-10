import React from 'react';
import PropTypes from 'prop-types';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import ProductCard from './ProductCard';

export default function ProductTiles({ items }) {
  return (
    <Tiles
      fill
      flush={false}
    >
      {
        items.map(product => 
          <Tile key={product.id}>
            <ProductCard
              product={product}
            />
          </Tile>
        )
      }
    </Tiles>
  );
}

ProductTiles.propTypes = {
  items: PropTypes.array.isRequired,  
};

