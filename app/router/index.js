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

let ejs = require('ejs');
module.exports = (request,response)=>{
    let  pathname = request.context.path;
    let handMap = {
        //首页
        '/':()=>{
            //请自行学习Promise的thenable形式
            return Promise.resolve({
                then:(resolve,reject)=>{
                    let layoutPath = path.resolve(__dirname,'html/layout.html');
                    let layout = fs.readFileSync(layoutPath,'utf-8');
                    let htmlPath = path.resolve(__dirname,'html/index.html');
                    fs.readFile(htmlPath,'utf-8',(err,dataString)=>{
                        if(err){
                            reject(err);
                        }else{
                            debugger;
                            let htmlString = ejs.compile(layout, {
                                    compileDebug:true,
                                    viewExt:'html',
                                    localsName: "locals", // 变量的命名空间
                                    delimiter: '%' //使用默认的%符号
                                })({
                                    title:'欢迎使用Node网络笔记本',
                                    templateName:path.join(__dirname,'html','index.html')
                                })
                            request.context.body = htmlString;
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