import React, { Component } from 'react'
import { connect } from 'react-redux'

class RequestContainer extends Component {
    render() {
        // const { data } = this.props
        return (
            <div>
                RequestContainer
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