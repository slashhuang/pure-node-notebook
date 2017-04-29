/*
 * created by slashhuang
 * 17/3/18
 */
const http = require('http');
const PORT = 7000;
const App =require('./app');
const server = new App();
//中间件
const cookieParser = require('./app/cookie-parser');
const staticServer = require('./app/staic-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser');
const viewServer = require('./app/view-server');
server.use(cookieParser);
server.use(urlParser);
server.use(apiServer);
server.use(staticServer);
server.use(viewServer);

//连接数据库
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog');
mongoose.connection.on('error', (err)=>console.error(`connection error:${error}`))
    .once('open', ()=>console.log('connected to mongodb'));

//启动app
http.createServer(server.initServer()).listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`)
});

