import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import CounterPage from './pages/Counter/containers';
import SomePage from './pages/SomePage/components';

const App = () => (
  <Switch>
    <Route exact path="/" component={CounterPage} />
    <Route path="/some" component={SomePage} />
  </Switch>
);

export default App;
