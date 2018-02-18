import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';

export default function PageNav({
  category,
  categories,
  hasNext,
  onCatChange,
  onClearFilter,
  onNextPage,
  onPrevPage,
  onPriceChange,
  onSortFromChange,
  page,
  priceLt,
  prices,
  sortFrom,
  sortFroms,
}) {
  const currentPrice = (prices || []).find(opt => opt.value === priceLt);
  const currentSortFrom = (sortFroms || []).find(opt => opt.value === sortFrom);

  return (
    <Box
      basis='xsmall'
      colorIndex='light-1'
      direction='row'
      size='xxlarge'
    >
      <Box 
        basis='small'
        direction='row'
      >
        {page !== 1 ?
          <Box
            flex
            justify='center'
            onClick={onPrevPage}
          >
            <Heading
              align='center' 
              strong
              tag='h3'
            >
              {"<"}
            </Heading>
          </Box> : <Box flex />}
        <Box 
          flex
          justify='center'
        >
          <Heading
            align='center' 
            strong
            tag='h4'
          >
            page {page}
          </Heading>
        </Box>
        {hasNext ?
          <Box
            flex
            justify='center'
            onClick={onNextPage}
          >
            <Heading
              align='center' 
              strong
              tag='h3'
            >
              {">"}
            </Heading>
          </Box> : <Box flex />}
      </Box>
      <Box 
        basis='small'
        flex
        justify='center'
        pad='small'
      >
        <Select
          onChange={({ value }) => onCatChange(value)}
          options={categories}
          placeHolder='category'
          value={category}
        />
      </Box>
      <Box 
        basis='small'
        flex
        justify='center'
        pad='small'
      >
        <Select
          onChange={({ value }) => onPriceChange(value.value)}
          options={prices}
          placeHolder='price'
          value={(currentPrice && currentPrice.label) || ''}
        />
      </Box>
      <Box 
        basis='small'
        flex
        justify='center'
        pad='small'
      >
        <Select
          onChange={({ value }) => onSortFromChange(value.value)}
          options={sortFroms}
          placeHolder='sort from'
          value={(currentSortFrom && currentSortFrom.label) || ''}
        />
      </Box>
      <Box 
        basis='small'
        flex
        justify='center'
        pad='small'
      >
        <Button
          label='clear filter'
          onClick={onClearFilter}
        />
      </Box>
    </Box>
  );
}

PageNav.propTypes = {
  categories: PropTypes.array.isRequired,  
  category: PropTypes.string,  
  hasNext: PropTypes.bool.isRequired,  
  onCatChange: PropTypes.func.isRequired,  
  onClearFilter: PropTypes.func.isRequired,  
  onNextPage: PropTypes.func.isRequired,  
  onPrevPage: PropTypes.func.isRequired,  
  onPriceChange: PropTypes.func.isRequired,  
  onSortFromChange: PropTypes.func.isRequired,  
  page: PropTypes.number.isRequired,  
  priceLt: PropTypes.string,  
  prices: PropTypes.array.isRequired,  
  sortFrom: PropTypes.string,  
  sortFroms: PropTypes.array.isRequired,  
};
