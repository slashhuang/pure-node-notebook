/*
 * created by slashhuang
 * node主程序入口
 */

 const http =require('http');
 const PORT = 7000;
 /*主程序逻辑*/
 const App = require('./app');
 let handlerInstance = new App();
 http.createServer(handlerInstance.initServer()).listen(PORT,()=>{
 	 console.log(`node----程序开始监听端口: ${PORT}`)
 });

 require('./db.js')
