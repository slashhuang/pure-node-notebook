/**
 * built by slashhuang
 * 17/3/18
 * body-parser的中间件
 * https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
 */

module.exports = (request,response)=>{
	let { method }= request.context;
	if(method =='put' || method == 'post'){
		 return new Promise((resolve,reject)=>{
	    	let _body=[]; 
	    	request.on('data',(chunk)=>{
				_body.push(chunk);
	    	}).on('end',()=>{
	    		request.context.body = JSON.parse(Buffer.concat(_body).toString());
	    		resolve()
	    	}).on('error',(error)=>{
	    		reject(error)
	    	})
	    })
	}
}


