/*
 *  主程序逻辑
 *  create by slashhuang
 */

 const StaticHandler  = require('./statics');

 class APP {
 	initServer(){
 		return (request,response)=>{
 			request.on("data",(chunked)=>{
 				console.log('getting data',chunked)
 			})
 			//静态资源处理
 			StaticHandler(request,response).then((data)=>{
 				response.end(data)
 			})
 		}
 	}
 }

 module.exports = APP;