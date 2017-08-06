/**
 * Created by rgu on 8/5/17.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import SignIn from './components/signin';
import ChatRoom from './components/chatroom';


const Greeting = function() {
    return <div>Hello</div>;
}

export default(
    <Route path="/" component={App}>
        <Route path="greeting" component={Greeting} />
        <Route path="signin" component={SignIn} />
        <Route path="chatroom" component={ChatRoom} />
    </Route>
);