/*
 * 纯前端页面路由分发
 * @author slashhuang
 * url模块文档
 * https://nodejs.org/api/url.html
 */
const Url =require('url');
module.exports = (request,response)=>{
    let  url = request.url;
    debugger;
    let data = Url.parse(url);
    console.log(data);
    return data;



}