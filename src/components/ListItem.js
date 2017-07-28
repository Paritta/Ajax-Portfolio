import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import ArrowIcon from 'react-icons/lib/fa/arrow-right';
import { Link } from 'react-router-dom';
import oc from 'open-color';

const ListItem = ({item, index}) => {
    const { name, content, startDay } = item;
    return(
        <Wrapper>
            <Info>
                <Content>
                    <div className="circle"></div>
                    {content}
                </Content>
                <Name> {name} </Name>
                <StartDay> {startDay} </StartDay>
            </Info>
            <CircleButton>
                 <Link to={`/Detail:${index}`}> 
                    <ArrowIcon/>
                 </Link> 
            </CircleButton>
        </Wrapper>
    )
}

ListItem.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    startDay: PropTypes.string
}

const StartDay = styled.div`
    font-size: 1em;
`

const Name = styled.div`
    font-size: 2.5em;
    font-family: 'Nanum Pen Script', cursive;
    margin-bottom: 10px;
`

const Content = styled.div`
    font-size: 0.75em;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
`

const Info = styled.div`
    .circle {
        position: relative;
        right: 5px;
        top: 3px;
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 0.25rem;
        background: ${oc.pink[4]};
    }
`

const Wrapper = styled.div`
    font-family: 'Nanum Myeongjo', Gothic;
    color: darkgray;
    padding: 50px;
    border-bottom: 1px solid darkgray;
    background: white;
    position: relative;
`

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
