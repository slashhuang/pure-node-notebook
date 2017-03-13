/*
 * 纯前端页面路由分发
 * @author slashhuang
 */
let fs = require('fs');
let path = require('path');
module.exports = (request,response)=>{
    let  pathname = request.context.path;
    let handMap = {
        //首页
        '/':()=>{
            //请自行学习Promise的thenable形式
            return Promise.resolve({
                then:(resolve,reject)=>{
                    let htmlPath = path.resolve(__dirname,'html/index.html');
                    fs.readFile(htmlPath,(err,dataString)=>{
                        if(err){
                            reject(err);
                        }else{
                            request.context.body = dataString;
                            resolve();
                        } 
                    })
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