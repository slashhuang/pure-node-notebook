

/*
 * created by slashhuang
 * node主程序入口
 */

 const http =require('http');
 const PORT = 7000;

 /*主程序逻辑*/
 const App = require('./app');
 let handlerInstance = new App()
 http.createServer(handlerInstance.initServer()).listen(PORT);

 console.log(`server listening on port ${PORT}`)