let url = 'http://apis.data.go.kr/6260000/BusanShowInfoService/getShowDetailsInfo';

let queryParams = '?' + encodeURIComponent('ServiceKey') + '=H9OxFod%2FmVfzsXbVbqmG%2FsZO4NqSpJ6w3qT66vcu4o2yIe4PLfLRkUj6IQykz1%2B8ReHEn5KWHW9f9nKWdLduWg%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('startDay') + '=' + encodeURIComponent('2017-06-22'); /* 한 페이지 결과 수 */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(`1`); /* 페이지 번호 */
queryParams += '&' + encodeURIComponent('_returnType') + '=' + encodeURIComponent('json'); /* 페이지 번호 */

const URL = url + queryParams;

export default URL  