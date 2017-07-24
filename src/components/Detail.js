import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';

class Detail extends Component {

    render() {
        const { data } = this.props;
        const { items } = data.toJS().data;

        return (
            <Wrapper> Detail in Container </Wrapper>
        )
    }
}

Detail.propTypes = {
    data: ImmutablePropTypes.mapContains({
            items: PropTypes.object,
    })
}

const Wrapper = styled.div`
`


export default Detail
