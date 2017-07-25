import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import oc from 'open-color';

class Detail extends Component {

    render() {
        const { data, index } = this.props;
        const { items } = data.toJS().data;

        return (
            <Wrapper>
                <Container>
                    <Title> {items[index].name}</Title>
                    <Item>장르: {items[index].content}</Item>
                    <Item>요금: {items[index].fee}</Item>
                    <Item>전화번호: {items[index].phone}</Item>
                    <Item>시작 날짜: {items[index].startDay}</Item>
                    <Item>끝나는 날짜: {items[index].endDay}</Item>
                    <Item>주소: {items[index].addr}</Item>
                    <Item>예매: {items[index].bookInfo}</Item>
                </Container>
            </Wrapper>
        )
    }
}

Detail.propTypes = {
    data: ImmutablePropTypes.mapContains({
            items: PropTypes.object,
    })
}

const Wrapper = styled.div`
    font-size: 1em;
    background: ${oc.pink[0]};
    height: 100vh;
`

const Container = styled.div`
    margin: 0 8rem;
`

const Item = styled.div`
    padding:16px;
    color: darkslategray;
`

    // background: papayawhip;
const Title = styled.div`
    padding:16px;
    color: lightsteelblue;
    font-size: 2em;
    text-align: center;
`


export default Detail
