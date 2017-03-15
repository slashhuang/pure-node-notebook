/*
 * 仅仅处理js/css等的
 * 简单版静态服务器
 */

const fs = require('fs');
const ContentTypeMap = require('./util')['ContentTypeMap'];
const path = require('path');
const mime = require('mime');
let getAbsolutePath =(...pathArr) =>{
	return path.resolve.apply(path,[process.cwd(),'public',...pathArr]);
}
//将数据存储到我们自定义的context对象上

let StaticHandler = (request,response)=>{
	let pathname = request.context.path;
	return Promise.resolve({then:(resolve)=>{
			let _body = '';
		 	let ext = path.extname(pathname);
			 //有后缀，并且不为action或者路由，则默认为静态资源
			if(!!ext && ext!=='action'){
				let ContentType = mime.lookup(pathname);
				Object.assign(request.context,{
					ContentType,
					body:fs.readFileSync(getAbsolutePath(`./${pathname}`))||'NOT FOUND'
				});
			}
			resolve()
	}})
 };
 module.exports =  StaticHandler