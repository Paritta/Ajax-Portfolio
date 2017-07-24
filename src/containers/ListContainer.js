import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';

class ListContainer extends Component {

    render() {
        const { data } = this.props;

        return (
            <div>
                ListContainer<br/>
                <List data = {data}/>
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
)(ListContainer)