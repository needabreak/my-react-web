import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Page1 from './pages/page1';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/page1" component={Page1} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
