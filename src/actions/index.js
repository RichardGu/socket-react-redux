/**
 * Created by rgu on 8/5/17.
 */


import React from 'react';
import axios from 'axios';

import {browserHistory} from 'react-router';
import {AUTH_USER, NEW_MESSAGE} from './types';


const ROOT_AUTH_SERVER = 'http://localhost:5000';


export function signinUser( {email, password, room} ) {

    return function(dispatch) {

        const postData = {username: email, password: password};

        axios.post(`${ROOT_AUTH_SERVER}/auth`, postData)
            .then(response => {
                dispatch({type: AUTH_USER, payload: {
                    username: email,
                    room: room
                }} );
                localStorage.setItem('token', response.data.access_token);
                browserHistory.push('/chatroom');
            })
            .catch(error => {
               console.log('-- auth error', error);
            });

    }

}



export function newMessage ( message ) {

    return function(dispatch) {
        dispatch({type: NEW_MESSAGE, payload: message});
    }

}