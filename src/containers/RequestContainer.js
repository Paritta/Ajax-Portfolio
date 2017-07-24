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

    componentDidMount() {
        request({url: url, method: 'GET'}, 
        (error, response, body) => 
        // { console.log('Reponse received', JSON.parse(body).list); });
        {  this.state.data = JSON.parse(body).list; });
    }

    render() {
        return (
            <div>
                RequestContainer<br/>
                {console.log(this.state)}
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