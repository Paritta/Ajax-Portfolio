import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail';

class DetailContainer extends Component {

    render() {
        const { data } = this.props;

        return (
            <div>
                <Detail data = {data}/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        data: state.request
    }),
    (dispatch) => ({
    })
)(DetailContainer)