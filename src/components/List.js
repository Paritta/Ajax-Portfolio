import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

const List= ({data}) => {
    const { items } = data.toJS().data;

    const itemList = items.map((item, index)=>
        // <div key={index}><Link to={`/Detail:${index}`}><Li>{item.name}</Li></Link></div>
        <div key={index}><Link to={`/Detail:${index}`}><ListItem item={item}/></Link></div>
    );
    return (
        <Wrapper> { itemList } </Wrapper>
    )
}

List.propTypes = {
    data: ImmutablePropTypes.mapContains({
            items: PropTypes.object,
    })
}

const Wrapper = styled.div`
`

export default List
