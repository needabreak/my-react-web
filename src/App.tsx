import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './pages/main';
import Page1 from './pages/page1';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route path="/page1" component={Page1} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
