import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: palevioletred;
	height: 4rem;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    display: flex;
    align-items: center; /* 세로 정렬 */
    justify-content: center; /* 가로 정렬 */
`;

const Header = () => (
    <Wrapper>
        공연/전시 정보
    </Wrapper>
);

export default Header;