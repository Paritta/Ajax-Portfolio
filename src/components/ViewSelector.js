import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MoneyOff from 'react-icons/lib/md/money-off';
import ListIcon from 'react-icons/lib/md/list';

const Item = ({children, selected, name, onSelect}) => (
    <StyledItem
        onClick={()=>onSelect(name)}
        active={name===selected}>
        {children}
    </StyledItem>
);

Item.propTypes = {
    selected: PropTypes.string,
    name: PropTypes.string,
    onSelect: PropTypes.func
};

const ViewSelector = ({selected, onSelect}) => (
    <Wrapper>
        <ItemContainer>
            <Item
                selected={selected}
                onSelect={onSelect}
                name="favorite">
                <MoneyOff/>
            </Item>
            <Item
                selected={selected}
                onSelect={onSelect}
                name="list">
                <ListIcon/>
            </Item>
        </ItemContainer>
        <Bar right={selected==='list'}/>
    </Wrapper>
)

ViewSelector.propTypes = {
    selected: PropTypes.string,
    onSelect: PropTypes.func
}

const Wrapper = styled.div`
    height: 4rem;
    position: relative;
`

const ItemContainer = styled.div`  
    height: 100%;
    width: 100%;
    display: flex;
`;

const Bar = styled.div`
    height: 3px;
    width: 50%;
    background: deepskyblue;

    position: absolute;
    bottom: 0px;

    transition: ease-in .25s;
    transform: ${props=>props.right?'translateX(100%)':'none'};
`

Bar.propTypes = {
    right: PropTypes.bool
}

const StyledItem = styled.div`
    flex: 1;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
        background: rgb(98.4%, 99.2%, 100%);
    }
`

export default ViewSelector
