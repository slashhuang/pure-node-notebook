/*
 * @Author slashhuang
 * 客户端API中间件服务
 * 17/3/15
 */

let fs = require('fs');
let path = require('path');
const ApiBlog = require('./Blog');
const ApiUser = require('./User');
const ajaxUtil = require('./util');

module.exports = (request,response)=>{
    let { pathname }= request.context;
    let apiPool = Object.assign({},ApiBlog,ApiUser);
    return Promise.resolve({then:(resolve,reject)=>{
        //在Node项目中的函数工具最好还是采用lodash
	    for(let apiName in apiPool){
	    	let handler = apiPool[apiName];
	    	//这里只简单比对path部分
	    	if(pathname.match(apiName)){
	    		let { shapeResponseJSON } = ajaxUtil;
	    		let jsonString = shapeResponseJSON(handler(request,response));
	    		Object.assign(response.context,{
	    			body :jsonString,
	    			ContentType : 'application/json'
	    		});
	    		break;
	    	}
	    }
        resolve()    
     }});
}