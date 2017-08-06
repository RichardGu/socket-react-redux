/**
 * Created by rgu on 8/5/17.
 */

import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../actions';



class SignIn extends Component {


    handleFormSubmit({email, password, room}) {
        this.props.signinUser({email, password, room});
    }


    render() {

        const {handleSubmit, fields: {email, password, room}} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                            </div>
                            <div className="panel-body">

                                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
                                    <div className="form-group">
                                        <input {...email} type="text" className="form-control" placeholder="email" />
                                    </div>
                                    <div className="form-group">
                                        <input {...password} type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input {...room} type="text" className="form-control" placeholder="room" />
                                    </div>
                                    <div className="form-group">
                                        <button action="submit" className="btn btn-primary">Join</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}


function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}


export default reduxForm({
    form: 'SignInForm',
    fields: ['email', 'password', 'room']
}, mapStateToProps, actions)(SignIn);

