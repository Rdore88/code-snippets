import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'
import {Provider} from 'react-redux';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
