/**
 * Created by rgu on 8/5/17.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authreducer';
import chatReducer from './chatreducer';

const rootReducer = combineReducers ({
    form: formReducer,
    auth: authReducer,
    chat: chatReducer
});


export default rootReducer;