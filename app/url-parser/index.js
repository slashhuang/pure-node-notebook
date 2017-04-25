/*
 * url-parser
 * 处理客户端数据
 */

const Url =require('url')
// request: query + body + method
module.exports = (ctx)=>{
	//原型链readable stream eventEmitter
	let { method,url } = ctx.req;
	let { reqCtx } = ctx;
	//parse querystring
	let urlObj =  Url.parse(url,true);
	method =  method.toLowerCase();
	Object.assign(reqCtx,{
		pathname:urlObj['pathname'],
		query : urlObj['query'],
		method
	})
	return Promise.resolve({
		then:(resolve,reject)=>{
			if(method == 'post'){
				let data = [];
		 		//paused flow
		 		//paused ===> flow
		 		ctx.req.on('data',(chunk)=>{
			 		data.push(chunk);
			 	}).on('end',()=>{
			 		let endData = Buffer.concat(data).toString();
			 		reqCtx.body = JSON.parse(endData);
			 		//通知下一个流程
			 		resolve()
			 	});
			}else{
				resolve()
			}
		}
	})
}
