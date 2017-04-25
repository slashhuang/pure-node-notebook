//网络请求
import axios from 'axios';
import querystring from 'querystring'
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response['data'];
  }, function (error) {
    // Do something with response error
    alert(`error ${error}`)
  });
//url形式 localhost:7000/blog?id=111
export const blogDetailApi = ()=>{
    let api = '/blogDetail.action'
    let query = querystring.parse(location.search.substr(1))
    return axios.get(api,{params:query}).then((res)=>{
            return res['data']
        })
};