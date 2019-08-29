import React from 'react';
import Loadable from 'react-loadable';

import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

const CounterPageLoadable = Loadable({
  loader: () =>
    import(/* webpackChunkName: "counter-page" */ './pages/Counter/containers'),
  loading() {
    return <div>Loading...</div>;
  }
});

const SomePageLoadable = Loadable({
  loader: () =>
    import(/* webpackChunkName: "some-page" */ './pages/SomePage/components'),
  loading() {
    return <div>Loading...</div>;
  }
});

const App = () => (
  <Switch>
    <Route exact path="/" component={CounterPageLoadable} />
    <Route path="/some" component={SomePageLoadable} />
  </Switch>
);

export default App;
