import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const FreeItem = ({item}) => {
    const { name } = item;
    return(
        <Wrapper>
            {name}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0.5rem;
    width: 50%;
`;

FreeItem.propTypes = {
    name: PropTypes.string
}

export default FreeItem
