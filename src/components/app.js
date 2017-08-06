/**
 * Created by rgu on 8/5/17.
 */


import React, {Component} from 'react';
import Header from './header';


export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }

}