import React, { Component } from 'react';
import Header from '../components/Header';
import DetailContainer from '../containers/DetailContainer';

class Detail extends Component {
    render() {
        let index = Number(this.props.match.params.index.substr(1));
        return (
            <div>
                <Header/>
                <DetailContainer index={index}/>
                 {/* {console.log(typeof Number(this.props.match.params.index.substr(1)))}  */}
                 {/* {typeof this.props.match.params.index}  */}

            </div>
        );
    }
}

export default Detail;

