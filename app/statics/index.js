/*
 * 静态资源处理
 */

const fs = require('fs');
const ContentTypeMap = require('./util')['ContentTypeMap'];
const path = require('path');
let getAbsolutePath =(...pathArr) =>{
	return path.resolve.apply(path,[__dirname,...pathArr]);
}
let StaticHandler = (request,response)=>{
 	let url = request.url;
 	if(url == '/'){
 		let indexPath = getAbsolutePath('./html/index.html');
 		return fs.readFileSync(indexPath)
 	}else{
 		if(/\.js|\.css/.test(url)){
 			let ext = path.extname(url);
 			let css_js_Path = getAbsolutePath(`.${url}`);
 			response.setHeader('Content-Type', ContentTypeMap[ext]);
 			return fs.readFileSync(css_js_Path)
 		}
 	}
 };
 module.exports =  StaticHandler