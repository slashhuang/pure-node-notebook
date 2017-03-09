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
let StaticHandler = (request,response)=>{
	let url = request.url;
	return Promise.resolve().then(()=>{
			if(url == '/'){
		 		let indexPath = getAbsolutePath('./html/index.html');
		 		return fs.readFileSync(indexPath,'utf-8')
		 	}else if(/\.js|\.css/.test(url)){
		 		let ext = path.extname(url);
		 		let css_js_Path = getAbsolutePath(`.${url}`);
		 		response.setHeader('Content-Type', ContentTypeMap[ext]);
		 		return fs.readFileSync(css_js_Path,'utf-8')
		 	}else{
		 		return 'not found'
		 	}
	})
 	
 };
 module.exports =  StaticHandler