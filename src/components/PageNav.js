import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';

export default function PageNav({ category, categories, hasNext, onCatChange, onNextPage, onPrevPage, page }) {
  return (
    <Box
      basis='xsmall'
      colorIndex='light-1'
      direction='row'
      size='large'
    >
      <Box 
        basis='1/2'
        direction='row'
      >
        {page !== 1 ?
          <Box
            flex
            justify='center'
            onClick={() => onPrevPage()}
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
            onClick={() => onNextPage()}
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
        basis='1/2'
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
    </Box>
  );
}

PageNav.propTypes = {
  categories: PropTypes.array.isRequired,  
  category: PropTypes.string,  
  hasNext: PropTypes.bool.isRequired,  
  onCatChange: PropTypes.func.isRequired,  
  onNextPage: PropTypes.func.isRequired,  
  onPrevPage: PropTypes.func.isRequired,  
  page: PropTypes.number.isRequired,  
};
