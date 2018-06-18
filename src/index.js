/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/configureStore';

require('./favicon.ico');
const store = configureStore();
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';


import { syncHistoryWithStore } from 'react-router-redux';
// import App from './components/App';

import Layout from 'components/Layout';

import HomePage from './scenes/HomePage';
import Booking from './scenes/Booking';



const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={HomePage}/>
        <Route path="/booking" component={Booking}/>
      </Route>
      <Redirect from="*" to="/"/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
