import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './page/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
}
