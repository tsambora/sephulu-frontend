import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

export default function AppHeader() {
  return (
    <Header
      colorIndex='grey-4'
      direction='row'
      full='horizontal'
      pad='medium'
    >
      <Box>
        <Link
          style={{ color: '#f5f5f5' }}
          to='/'
        >
          <Heading
            margin='none'
            size='small'
            strong
          >
            Sephulu
          </Heading>
        </Link>
      </Box>
    </Header>
  );
}
