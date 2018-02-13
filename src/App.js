import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Route } from 'react-router-dom';
import AppContainer from 'grommet/components/App';

import Catalog from './pages/CatalogPage';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer centered={false}>
        <Route
          component={(props) => <Catalog {...props} />}
          path='/:page?/:category?'
        />
      </AppContainer>
    </Provider>
  );
}
