import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './page/Main';

export default function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </>
  );
}
