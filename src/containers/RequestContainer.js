import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as requestActions from '../modules/request';

class RequestContainer extends Component {

    componentDidMount() {
        const { RequestActions, error } = this.props
        RequestActions.getPost('1').then(response=>console.log(response));
        console.log(error);
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

// request: state.request.data,

export default connect(
    (state) => ({
        loading: state.request.pending,
        error: state.request.error,
    }),
    (dispatch) => ({
        RequestActions: bindActionCreators(requestActions, dispatch)
    })
)(RequestContainer)