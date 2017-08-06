/**
 * Created by rgu on 8/5/17.
 */


import React, {Component} from 'react';
import ChatInputForm from './chatinputform';
import {connect} from 'react-redux';
import * as actions from '../actions';
import io from 'socket.io-client';
import ChatItemList from './chatitemlist';


class ChatRoom extends Component {

    constructor(props) {
        super(props);
        const socket = io('http://localhost:3000');

        this.state = {
            socket
        }
    }

    componentWillMount() {
    }


    renderChatList() {

        const{username, room} = this.props;
        const {socket} = this.state;

        return (
            <ChatItemList socket = {socket} username={username} room={room} />
        );
    }

    render() {

        const {username, room} = this.props;
        const {socket} = this.state;

        return (
            <div className="row">
                <div className="col-sm-4">Name list</div>
                <div className="col-sm-8">
                    <div className="row">
                        {room}
                        <ChatInputForm username={username} socket={socket} />
                    </div>
                    <div className="row">
                        {this.renderChatList()}
                    </div>
                </div>
            </div>
        );

    }


}

function mapStateToProps(state) {
    return {
        room: state.auth.room,
        username: state.auth.username
    };
}


export default connect(mapStateToProps, actions) (ChatRoom);