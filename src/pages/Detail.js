import React, { Component } from 'react';
import DetailContainer from '../containers/DetailContainer';

class Detail extends Component {
    render() {
        let index = Number(this.props.match.params.index.substr(1));
        return (
            <div>
                <DetailContainer index={index}/>
            </div>
        );
    }
}

export default Detail;

