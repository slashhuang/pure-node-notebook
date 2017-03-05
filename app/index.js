/*
 *  主程序逻辑
 *  create by slashhuang
 */

 class APP {
 	initServer(){
 		return (request,response)=>{
 			response.end('欢迎使用Node记事本')
 		}
 	}
 }

 module.exports = APP;