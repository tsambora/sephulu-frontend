import React from 'react';
import PropTypes from 'prop-types';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Spinning from 'grommet/components/icons/Spinning';

import ProductCard from './ProductCard';
import PageNav from './PageNav';

export default function ProductTiles({ isLoading, items, queries }) {
  const { category, categories, hasNext, onCatChange, onNextPage, onPrevPage, page } = queries;

  if (isLoading) {
    return (
      <Box
        align='center'
        full
        justify='center'
      >
        <Heading>
          loading products <Spinning />
        </Heading>
      </Box>
    );
  }

  return (
    <Box>
      <PageNav
        categories={categories}
        category={category}
        hasNext={hasNext}
        onCatChange={onCatChange}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        page={page}
      />
      <Tiles
        basis='large'
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
    </Box>
  );
}

ProductTiles.propTypes = {
  isLoading: PropTypes.bool.isRequired,  
  items: PropTypes.array.isRequired,  
  queries: PropTypes.object.isRequired,  
};

