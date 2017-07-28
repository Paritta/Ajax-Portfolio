import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import ListItem from './ListItem';

const List= ({data}) => {
    const { items } = data.toJS().data;

    const itemList = items.map((item, index)=>
        <div key={index}><ListItem item={item} index={index}/></div>
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
