import React from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../redux';
import history from './history';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import QuestionsPage from '../../pages/QuestionsPage/QuestionsPage';
import ResultPage from '../../pages/ResultPage/ResultPage';

import { Layout, Content } from './App.styled';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Content>
          <Router history={history}>
            <Switch>
              <Route
                exact
                path='/'
                component={WelcomePage}
              />
              <Route path='/questions' component={QuestionsPage} />
              <Route path='/results' component={ResultPage} />
            </Switch>
          </Router>
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
