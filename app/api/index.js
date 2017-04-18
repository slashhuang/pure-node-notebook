/*
 * api server
 */


 module.exports=(ctx)=>{
 	let { url,method } = ctx.req;
 	let { resCtx,reqCtx } = ctx; 
 	let { res } = ctx;

 	let apiMap={
		'/list.action':['吉他','三只松鼠','mongodb'],
		'/user.action':['slash','男性','中国人'],
		"/category.action":[{
			id:1,
			name:'node.js'},
			{name:'react',
			id:2},
			{name:'vue',id:3}]
 	};
 	method = method.toLowerCase();
 	return Promise.resolve({
 		then:(resolve,reject)=>{
		 	// 因为我们对method没有过滤
		 	if(url.match('action')){
		 		 if(method == 'get'){ //localhost:7000?a=1&b=2
		 		 	if(apiMap[url]){
		 		 		resCtx.body = JSON.stringify(apiMap[url])
		 		 		resCtx.statusCode=200
		 		 	}
				 }else{
				 	let { body } = reqCtx;
				 	//处理post B post  ==socket==  S
					resCtx.body = JSON.stringify(body);
					resCtx.statusCode=200
				 };
				 resCtx.headers = Object.assign(resCtx.headers,{
				 		"Content-Type":"application/json"
				 })
		 	}
		 	resolve()
 	}})
 }
