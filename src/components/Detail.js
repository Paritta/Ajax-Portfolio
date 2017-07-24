import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';

class Detail extends Component {

    render() {
        const { data, index } = this.props;
        const { items } = data.toJS().data;

        return (
            <Wrapper>
                 {items[index].name}
            </Wrapper>
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
