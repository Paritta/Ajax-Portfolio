import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Container = ({children, visible}) => visible ? (
    <Wrapper>
        {children}
    </Wrapper>
) : null;

const Wrapper = styled.div`

`

Container.propTypes = {
    visible: PropTypes.bool
}

export default Container
