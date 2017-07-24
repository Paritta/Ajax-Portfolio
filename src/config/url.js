let url = 'http://apis.data.go.kr/6260000/BusanShowInfoService/getShowDetailsInfo';

let queryParams = '?' + encodeURIComponent('ServiceKey') + '=rXndeyRMn%2Fa9LoxgQcPeYtKWg2fgH34dq1pBmOJSW0UZfgR1BnNBxsyY1I6Ehif2yhPKhbjuOOe0222xIyQshA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(`1`); /* 페이지 번호 */
queryParams += '&' + encodeURIComponent('_returnType') + '=' + encodeURIComponent('json'); /* 페이지 번호 */

url = url + queryParams;

export default url  