import React, { Component } from 'react';
import { connect } from 'react-redux';
// import request from 'request';

var request = require('request');
var url = 'http://apis.data.go.kr/6260000/BusanShowInfoService/getShowDetailsInfo';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=rXndeyRMn%2Fa9LoxgQcPeYtKWg2fgH34dq1pBmOJSW0UZfgR1BnNBxsyY1I6Ehif2yhPKhbjuOOe0222xIyQshA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(`1`); /* 페이지 번호 */
queryParams += '&' + encodeURIComponent('_returnType') + '=' + encodeURIComponent('json'); /* 페이지 번호 */

class RequestContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }
    // _handleData = () => {
    //     return request ({
    //         url: url + queryParams,
    //         method: 'GET'
    //     }, (err, res, body)=>{
    //         console.log(body);
    //     })
    // }
    

    componentDidMount() {
        request({
            url: url + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            //console.log('Status', response.statusCode);
            //console.log('Headers', JSON.stringify(response.headers));
            console.log('Reponse received', JSON.parse(body).list);
        });
    }

    render() {
        return (
            <div>
                RequestContainer<br/>
                {console.log(this.state)}
                {`Data here ${this.props}`}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        // data: state.post
    }),
    null
)(RequestContainer)