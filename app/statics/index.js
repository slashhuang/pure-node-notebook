/*
 * 仅仅处理js/css等的
 * 简单版静态服务器
 */

const fs = require('fs');
const ContentTypeMap = require('./util')['ContentTypeMap'];
const path = require('path');
let getAbsolutePath =(...pathArr) =>{
	return path.resolve.apply(path,[__dirname,...pathArr]);
}
//将数据存储到我们自定义的context对象上
let StaticHandler = (request,response)=>{
	let url = request.context.url;
	return Promise.resolve().then(()=>{
			let _body = '';
			if(url == '/'){
		 		let indexPath = getAbsolutePath('./html/index.html');
		 		_body = fs.readFileSync(indexPath,'utf-8')
		 	}else if(/\.js|\.css/.test(url)){
		 		let ext = path.extname(url);
		 		let css_js_Path = getAbsolutePath(`.${url}`);
		 		response.setHeader('Content-Type', ContentTypeMap[ext]);
		 		_body =  fs.readFileSync(css_js_Path,'utf-8')
		 	}else{
		 		_body =  'not found'
		 	}
			request.context.body = _body;
	})
 	
 };
 module.exports =  StaticHandler