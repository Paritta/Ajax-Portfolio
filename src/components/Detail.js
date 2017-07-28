import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import oc from 'open-color';
import Map from './Map';

class Detail extends Component {

    render() {
        const { data, index } = this.props;
        const { items } = data.toJS().data;

        return (
            <Wrapper>
                <MapContainer>
                    <Map
                        lat={items[index].lat}
                        lng={items[index].lng}
                        containerElement={
                            <div style={{ height: `100%` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                    />
                </MapContainer>
                <Address>{items[index].addr}</Address>
                <Container>
                    <Title> {items[index].name}</Title>
                    <Note> ※{items[index].note} </Note>
                    <Item>요금: {items[index].fee}</Item>
                    <Item>{items[index].endDay} 마지막</Item>
                    <Item>주차 {items[index].parking} </Item>
                    <Item> {items[index].phone}</Item>
                    <a href={items[index].bookInfo}><Button>예매하러 가기</Button></a>
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

const Note = styled.div`
    position: relative;
    bottom: 10px;
    left: 20px;
    color: darkgray;
    font-size: 1.2em;
    font-family: 'Nanum Pen Script', cursive;
`

const Address = styled.div`
    padding:16px;
    color: darkgray;
    font-size: 1.5em;
    font-family: 'Nanum Pen Script', cursive;
    text-align: center;
`

const Title = styled.div`
    padding:16px;
    color: palevioletred;
    font-size: 2.5em;
    font-family: 'Nanum Pen Script', cursive;
`

const Button = styled.button`
    background: white;
    padding: 0.8em 9em;
    border: 3px solid palevioletred;
    color: palevioletred;
    border-radius: 3px;
    font-size: 1.2em;
    margin-top: 3rem;

    &:hover{
        background: ${oc.gray[0]};
    }
`

const Wrapper = styled.div`
    font-size: 1em;
    background: ${oc.pink[0]};
    height: 120vh;
`

const MapContainer = styled.div`
    height: 50vh;
`
const Container = styled.div`
    height: 50vh;
    margin: 0 8rem;
    border: 5px solid palevioletred;
    padding: 2rem;
`

const Item = styled.div`
    padding:16px;
    color: darkslategray;
`

export default Detail
