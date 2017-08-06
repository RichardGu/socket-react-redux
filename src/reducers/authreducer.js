/**
 * Created by rgu on 8/5/17.
 */


import {AUTH_USER, AUTH_ERROR} from '../actions/types';


export default function(state = {}, action) {

    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: true,
                username: action.payload.username,
                room: action.payload.room
            }
        case AUTH_ERROR:
            return {
                ...state,
                authenticated: false,
                error: action.payload
            }
    }
    return state;
}