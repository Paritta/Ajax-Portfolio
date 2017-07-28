import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import oc from 'open-color';

const Home = props => (
    <Wrapper>
        <img src="http://bohemianbrighton.com/wp-content/uploads/2015/06/Galactic-Whale.jpg" alt="a" height='500' width='500'/>
        <Button><Link to='/Config'>시작하기</Link></Button>
    </Wrapper> 
)

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Button = styled.button`
    background: white;
    padding: 0.8em 9em;
    border: 3px solid palevioletred;
    color: white;
    border-radius: 3px;
    font-size: 1.2em;
    margin-top: 2rem;

    &:hover{
        background: ${oc.gray[0]};
    }
`

export default Home
