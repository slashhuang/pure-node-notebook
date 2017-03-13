/**
 * built by slashhuang
 * 17/3/8
 * 解析URL的中间件
 * url模块文档
 * https://nodejs.org/api/url.html
 */
const Url =require('url');
const querystring = require('querystring');

module.exports = (request,response)=>{
    return new Promise((resolve,reject)=>{
        let urlObj =  Url.parse(request.url);
        request.context.query = querystring.parse(urlObj.search);
        request.context.path = urlObj.pathname;
        //将流程流转到执行下一个处理中间间
        resolve();
    })
}


