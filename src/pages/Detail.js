import React, { Component } from 'react';
import Header from '../components/Header';
import DetailContainer from '../containers/DetailContainer';

class Detail extends Component {
    render() {
        return (
            <div>
                <Header/>
                <DetailContainer/>
                Detail
                {/* {console.log(this.props.match.params.index)} */}
                 {/* {typeof this.props.match.params.index}  */}
            </div>
        );
    }
}

export default Detail;

