/*
 * 纯前端页面路由分发
 * @author slashhuang
 * 17/3/10
 */
let fs = require('fs');
let path = require('path');
const mime =require('mime');
let { getAllBlog }  =require('../database');
/*
 * 添加模板引擎
 * 文档地址:https://github.com/mde/ejs
 */
let ejsCompiler = require('./ejs_render');
module.exports = (request,response)=>{
    let  pathname = request.context.pathname;
    let {dbClient} = response
    let handMap = {
        //首页
        '/':{
            viewName:'index.html',
            dataTracker:()=>{
                let collection = dbClient.collection('blog_list');
                return getAllBlog(collection).then(dbData=>{
                    let { data } = dbData;
                    return {
                        blogList:data.map(blog=>blog.content)
                    }
                })
            },
            data:{
                title:'欢迎使用Node网络笔记本',
                staticTag:"index",
                blogList:'hello world'
            }
        },
        //登录页面
        '/login':{
            viewName:'login.html',
            data:{
                title:'登录',
                staticTag:"login"
            }
        },
        //博客列表页面
        '/list':{
            viewName:'list.html',
            data:{
                title:'博客列表',
                staticTag:"list"
            }
        },
        //写文章页面
        '/write':{
            viewName:'write.html',
            data:{
                title:'写博客',
                staticTag:"write"
            }
        },
         //关于作者
        '/about':{
            viewName:'list.html',
            data:{
                title:'博客列表',
                staticTag:"about"
            }
        },
    };
    return Promise.resolve().then(()=>{
        //html中间件
        if(handMap[pathname]){
            let {viewName,data,dataTracker} = handMap[pathname];
            return Promise.resolve().then(()=>{
                     return dataTracker && dataTracker()
                }).then(dbData=>{
                    Object.assign(data,dbData||{})
                    let htmlString = ejsCompiler(viewName,data);
                    Object.assign(response.context,{
                        body:htmlString,
                        ContentType:"text/html"
                    });
                })
        }
     });
}