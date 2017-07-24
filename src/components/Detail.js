import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';

class Detail extends Component {

    render() {
        const { data, index } = this.props;
        const { items } = data.toJS().data;

        return (
            <Wrapper>
                <Item> {items[index].name}</Item>
                <Item>장르: {items[index].content}</Item>
                <Item>요금: {items[index].fee}</Item>
                <Item>전화번호: {items[index].phone}</Item>
                <Item>시작 날짜: {items[index].startDay}</Item>
                <Item>끝나는 날짜: {items[index].endDay}</Item>
                <Item>주소: {items[index].addr}</Item>
                <Item>예매: {items[index].bookInfo}</Item>
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
`

const Item = styled.div`
`


export default Detail
