/*
 * 静态资源处理
 */

const fs = require('fs');
const path = require('path');
let getAbsolutePath =(...pathArr) =>{
	return path.resolve.apply(path,[__dirname,...pathArr]);
}
let StaticHandler = (request)=>{
 	let url = request.url;
 	if(url == '/'){
 		let indexPath = getAbsolutePath('./html/index.html');
 		return fs.readFileSync(indexPath)
 	}else{
 		if(/\.js/.test(url)){
 			let jsPath = getAbsolutePath(`.${url}`);
 			return fs.readFileSync(jsPath)
 		}
 	}
 };
 module.exports =  StaticHandler