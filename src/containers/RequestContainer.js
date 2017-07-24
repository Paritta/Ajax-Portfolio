import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'request';
import url from '../config/url';

class RequestContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    // componentDidMount() {
    //     request({url: url, method: 'GET'}, 
    //     (error, response, body) => 
    //     // { console.log('Reponse received', JSON.parse(body).list); });
    //     {  data.push(JSON.parse(body).list) });
    // }

    _handleData = () => {
        request({url: url, method: 'GET'}, 
        (error, response, body) => 
        // { console.log('Reponse received', JSON.parse(body).list); });
        {  this.state.d = JSON.parse(body).list[0].addr });
    }

    render() {
        return (
            <div>
                RequestContainer<br/>
                {this._handleData()}
                {console.log(this.state['d'])}  
                {`Data here ${this.props}`} 
            </div>
        )
    }
}

export default connect(
    (state) => ({
        // data: state.post
    }),
    null
)(RequestContainer)