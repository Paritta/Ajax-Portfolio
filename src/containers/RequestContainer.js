import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as requestActions from '../modules/request';

class RequestContainer extends Component {

    componentDidMount() {
        const { RequestActions } = this.props
        RequestActions.getPost('1').then(response=>console.log(response));
    }

    render() {
        return (
            <div>
                RequestContainer<br/>
            </div>
        )
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        RequestActions: bindActionCreators(requestActions, dispatch)
    })
)(RequestContainer)