import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import ArrowIcon from 'react-icons/lib/fa/arrow-right';
import { Link } from 'react-router-dom';
import oc from 'open-color';

const ListItem = ({item, index}) => {
    const { name } = item;
    return(
        <Wrapper>
            {name}
            <CircleButton>
                 <Link to={`/Detail:${index}`}> 
                    <ArrowIcon/>
                 </Link> 
            </CircleButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: darkgray;
    padding: 50px;
    border-bottom: 1px solid darkgray;
    background: white;
    position: relative;
`

ListItem.propTypes = {
    name: PropTypes.string
}

const CircleButton = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
    right: 3rem;
    width: 3rem;
    height: 3rem;

    font-size: 2em;
    border-radius: 1.5rem;

    background: white;
    border: 1px solid ${oc.gray[4]};

    &:hover {
        border: 1px solid ${oc.pink[4]};
        background: ${oc.gray[0]};;
        color: ${oc.pink[4]};
    }
`;

export default ListItem
