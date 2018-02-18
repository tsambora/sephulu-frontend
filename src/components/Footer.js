import React from 'react';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import InstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';

export default function AppFooter() {
  return (
    <Footer
      colorIndex='light-1'
      direction='row'
    >
      <Box
        full='horizontal'
        pad='small'
      >
        <Heading
          margin='none'
          strong
          tag='h6'
        >
          Handmade by me © 2017
        </Heading>
      </Box>
      <Box
        direction='row'
        justify='end'
        responsive='false'
      >
        <Box>
          <Anchor
            href='https://twitter.com/samborao'
            target='blank'>
            <TwitterIcon size='medium' />
          </Anchor>
        </Box>
        <Box>
          <Anchor
            href='https://github.com/tsambora'
            target='blank'>
            <GithubIcon size='medium' />
          </Anchor>
        </Box>
        <Box>
          <Anchor
            href='https://instagram.com/tsambora'
            target='blank'>
            <InstagramIcon size='medium' />
          </Anchor>
        </Box>
      </Box>
    </Footer>
  );
}
