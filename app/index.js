/*
 *  主程序逻辑
 *  create by slashhuang
 */

 class APP {
 	initServer(){
 		return (request,response)=>{
 			response.end('hello world')
 		}
 	}
 }

 module.exports = APP;