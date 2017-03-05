

/*
 * created by slashhuang
 * node主程序入口
 */

 const http =require('http');


 /*主程序逻辑*/
 const APP = require('./app');
 http.createServer(APP.callback()).listen(7000);