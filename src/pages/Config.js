import React, { Component } from 'react';
import Header from '../components/Header';
import RequestContainer from '../containers/RequestContainer';

class Config extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RequestContainer/> 
            </div>
        );
    }
}

export default Config;
