import React, { Component } from 'react';
import Header from '../components/Header';
import RequestContainer from '../containers/RequestContainer';
import ListContainer from '../containers/ListContainer';

class Config extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RequestContainer/> 
                <ListContainer/>
            </div>
        );
    }
}

export default Config;
