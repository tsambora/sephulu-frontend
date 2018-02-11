import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Match } from 'react-router';
import AppContainer from 'grommet/components/App';

import Catalog from './pages/CatalogPage';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer centered={false}>
        <Match
          component={Catalog}
          pattern='/:page?'
        />
      </AppContainer>
    </Provider>
  );
}

