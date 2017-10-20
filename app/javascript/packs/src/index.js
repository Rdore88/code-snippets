import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index.js'
import Home from './containers/home/Home';
import SignUp from './containers/Signup/SignUp';
import LogIn from './containers/Login/LogIn'
import {Provider} from 'react-redux';

const store = createStore(reducer)

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
