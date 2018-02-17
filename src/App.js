import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Route, Switch } from 'react-router-dom';
import AppContainer from 'grommet/components/App';

import Catalog from './pages/CatalogPage';
import Product from './pages/ProductPage';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer centered={false}>
        <Switch>
          <Route
            component={(props) => <Catalog {...props} />}
            exact
            path='/'
          />
          <Route
            component={(props) => <Product {...props} />}
            path='/products/:id'
          />
        </Switch>
      </AppContainer>
    </Provider>
  );
}
