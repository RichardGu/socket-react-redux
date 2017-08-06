/**
 * Created by rgu on 8/5/17.
 */

import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';


class ChatItemList extends Component {


    componentDidMount() {

        const { username, room, socket, newMessage } = this.props;

        socket.on('connect', function() {

            socket.emit('join', {'name': username, 'room': room}, function(error) {
                if(error) {
                    alert(error);
                    window.location.href = '/signin';
                } else {
                    console.log(`${username} joined in`);
                }
            });

        });

        socket.on('newMessage', function(message) {
            newMessage(message);
        });


    }


    renderMessages() {

        const {messages} = this.props;

        if(!messages)
            return;

        console.log('------ messages: ', messages );

        const display = messages.map((item) => {
            return <li key={item.createdAt}>{item.from}: {item.text}</li>
        });

        return display;
    }

    render() {

        return (
            <div>
                <ol className="list-group">{this.renderMessages()}</ol>
            </div>
        )

    }


}


function mapStateToProps(state) {
    return { messages: state.chat.messages };
}


export default connect(mapStateToProps, actions)(ChatItemList);