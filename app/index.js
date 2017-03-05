/*
 *  主程序逻辑
 *  create by slashhuang
 */

 const StaticHandler  = require('./statics');

 class APP {
 	initServer(){
 		return (request,response)=>{
 			let PlainText = StaticHandler(request,response);
 			response.end(PlainText)
 		}
 	}
 }

 module.exports = APP;