import React from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../redux';
import history from './history';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';

import { Layout, Content } from './App.styled';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Content>
          <Router history={history}>
            <Switch>
              <Route path='/' component={WelcomePage} />
            </Switch>
          </Router>
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
