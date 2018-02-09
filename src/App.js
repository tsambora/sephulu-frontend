import React from 'react';
import { Match } from 'react-router';
import AppContainer from 'grommet/components/App';

import Home from './pages/HomePage';

const App = React.createClass({
  render() {
    return (
      <AppContainer centered>
        <Match
          component={Home}
          exactly
          pattern='/'
        />
      </AppContainer>
    );
  }
});

export default App;
