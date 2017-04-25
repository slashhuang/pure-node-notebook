/*
 * api路由逻辑
 * @Author slashhuang
 * 17/4/25
 */
/*
 * usage for router
 * const router = new require('Router')()
 * router.get('/list.action',fn)
 * router.post('/list.action',fn)
 */
 class Router {
    constructor(){
        this.routerMap={
            get:{},
            post:{}
        }
    }
    get(url,callback){
        let getMap  = this.routerMap.get;
        getMap[url] = callback
    }
    post(url,callback){
        let postMap  = this.routerMap.post;
        postMap[url] = callback
    }
    routes(ctx){
        let { pathname,method } = ctx.reqCtx;
        let { resCtx,reqCtx } = ctx;
        let { res } = ctx;
        let handler = this.routerMap[method][pathname];
        if(handler){
            return Promise.resolve(handler(ctx))
        }else{
            return Promise.resolve()
        }
    }
 }
 module.exports = Router;