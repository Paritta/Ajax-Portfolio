import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import ArrowIcon from 'react-icons/lib/fa/arrow-right';
import oc from 'open-color';

const ListItem = ({item}) => {
    const { name } = item;
    return(
        <Wrapper>
            {name}
            <CircleButton>
                <ArrowIcon/>
            </CircleButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: darkgray;
    padding: 50px;
    border-bottom: 1px solid darkgray;
    background: white;
    display: flex;
`

ListItem.propTypes = {
    name: PropTypes.string
}

const CircleButton = styled.div`
`;

export default ListItem
