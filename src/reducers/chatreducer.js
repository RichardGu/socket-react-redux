/**
 * Created by rgu on 8/5/17.
 */

import {NEW_MESSAGE} from '../actions/types';

const initialState = {
    messages: []
}
export default function(state = initialState, action) {

    switch (action.type) {
        case NEW_MESSAGE:

            console.log('-- hat reducer', action);

            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
    }
    return state;
}