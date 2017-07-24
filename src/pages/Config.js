import React, { Component } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import RequestContainer from '../containers/RequestContainer';
import ListContainer from '../containers/ListContainer';
import ViewSelectorContainer from '../containers/ViewSelectorContainer';
import { connect } from 'react-redux';

class Config extends Component {
    render() {

        const { view } = this.props;

        return (
            <div>
                <Header/>
                <ViewSelectorContainer/>
                <RequestContainer/> 
                <Container visible={view==='list'}>
                    <ListContainer/>
                </Container>
                <Container visible={view==='favorite'}>
                    {/* <FavoriteContainer/> */}
                </Container>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        view: state.base.get('view')
    })
)(Config);