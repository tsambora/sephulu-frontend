import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { Link } from 'react-router';

export default function PageNav({ hasNext, nextUrl, page, prevUrl }) {
  return (
    <Box
      basis='xsmall'
      colorIndex='neutral-2'
      direction='row'
      size='small'
    >
      <Box
        flex
        justify='center'
      >
        {page !== 1 ?
          <Link to={prevUrl}>
            <Heading
              align='center' 
              strong
              tag='h3'
            >
              {"<"}
            </Heading>
          </Link> : <Box />}
      </Box> 
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
      <Box
        flex
        justify='center'
      >
        {hasNext ? 
          <Link to={nextUrl}>
            <Heading
              align='center' 
              strong
              tag='h3'
            >
              {">"}
            </Heading>
          </Link> : <Box />}
      </Box>
    </Box>
  );
}

PageNav.propTypes = {
  hasNext: PropTypes.bool.isRequired,  
  nextUrl: PropTypes.string.isRequired,  
  page: PropTypes.number.isRequired,  
  prevUrl: PropTypes.string.isRequired,  
};

