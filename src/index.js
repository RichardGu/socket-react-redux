/**
 * Created by rgu on 8/5/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import {Router, browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.querySelector('.container')
);

