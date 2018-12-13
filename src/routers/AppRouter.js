import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Project from '../components/Project';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={Dashboard} exact={true} />
        <Route path='/projects/:number' component={Project} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)