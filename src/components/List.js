import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

class List extends Component {

    render() {
        const { data } = this.props;
        const { items } = data.toJS().data;

        const itemList = items.map((item, index)=>
            <div key={index}><Link to={`/Detail:${index}`}><Li>{index}{item.name}</Li></Link></div>
        );
        return (
            <Wrapper> { itemList } </Wrapper>
        )
    }
}

List.propTypes = {
    data: ImmutablePropTypes.mapContains({
            items: PropTypes.object,
    })
}

const Wrapper = styled.div`
`

const Li = styled.div`
    color: darkgray;
    padding: 16px;
    border-bottom: 1px solid darkgray;
    background: white;
`

export default List
