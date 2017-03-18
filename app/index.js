/*
 *  主程序逻辑
 *  create by slashhuang
 */

 const StaticHandler  = require('./statics');
 const RouterHandler = require('./router');
 const UrlParser = require('./url-parser');
 class APP {
	constructor(){
		this.middlewareQueue = [];
	}
	use(middleware){
		this.middlewareQueue.push(middleware);
	}
	composeMiddleware(){
		return this.middlewareQueue.reduce((pre,currentPromise,index,middlewareQueue)=>{
					return	pre.then(()=>{
								return currentPromise(this.request,this.response)
							})
			},Promise.resolve())
	} 
 	initServer(){ 
 		return (request,response)=>{
			this.request = request;
			this.response = response;
			//自定义数据模型
			request.context={
				body:'', //前端post的数据，
				path:'',//路径
				query:'',//query键值对
			};
			//自定义数据模型
			response.context={
				body:'', //返回前端的数据，
				ContentType:'text/plain', //返回头Content-Type类型
			};
			//解析Url
			this.use(UrlParser);
			//解析静态资源
			this.use(StaticHandler);
			//解析网页路由
			this.use(RouterHandler);
			this.composeMiddleware().then(data=>{
				let { body,ContentType } = response.context;
				response.setHeader('Content-Type',ContentType)
				response.statusCode= 200;
				response.statusMessage = 'response correctly';
				response.end(body);
			}).catch(error=>{
				response.writeHead(400,'bug happened');
				response.end(`bug happended ${error.message} ${error.stack}`);
			})
 		}
 	}
 }

 module.exports = APP;