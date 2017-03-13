/*
 * 纯前端页面路由分发
 * @author slashhuang
 * 17/3/10
 */
let fs = require('fs');
let path = require('path');
/*
 * 添加模板引擎
 * 文档地址:https://github.com/mde/ejs
 */

let ejsCompiler = require('./ejs_render');
module.exports = (request,response)=>{
    let  pathname = request.context.path;
    let handMap = {
        //首页
        '/':()=>{
            //请自行学习Promise的thenable形式
            return Promise.resolve({
                then:(resolve,reject)=>{
                    try{
                      let htmlString =  ejsCompiler('index.html',{
                                title:'欢迎使用Node网络笔记本',
                            });
                      request.context.body = htmlString;
                      resolve()    
                    }catch(e){
                      reject()
                    }
                }
            })
            
        },
        //登录页面
        '/login':()=>{

        },
        //博客列表页面
        '/list':()=>{

        },
         //关于作者
        '/about':()=>{

        }
    };
    return handMap[pathname] && handMap[pathname]();
}