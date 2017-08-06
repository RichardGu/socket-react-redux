/**
 * Created by rgu on 8/5/17.
 */

import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';


class ChatInputForm extends Component {


    handleFormSubmit(formProps) {

        const {username, socket} = this.props;
        console.log(formProps.message);
        socket.emit('createMessage', {
            from: username,
            text: formProps.message
        }, function () {
            console.log('message sent');
        });

    }


    render() {

        const { handleSubmit, fields: { message } } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <input {...message} type="text" className="form-control"/>
                </fieldset>
                <button action="submit" className="btn btn-primary">Send</button>
            </form>
        );

    }

}


export default reduxForm({
    form: 'ChatInputForm',
    fields: ['message']
}, null, actions)(ChatInputForm);


