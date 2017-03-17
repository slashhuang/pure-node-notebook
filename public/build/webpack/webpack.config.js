/*
 * @Author slashhuang
 * 17/3/15
 */

var  plugins = require('./plugin_loader.js')['plugins'];
var  loaders = require('./plugin_loader.js')['loaders'];
var  path= require('path');
var  AddResolve = (obj)=>{
    var transObj = {};
    for(var key in obj){
        transObj[key] = path.resolve(process.cwd(),obj[key])
    }
    return transObj;
};
//webpack配置文件
module.exports =  {
        watch: true,
        entry: {
            index:'./js/index.js',
            write:'./js/write.js',
            list:"./js/list.js",
            login:"./js/login.js",
            common: [
                'jquery',
                'imagesloaded',
                'gallery',
                'qrcode',
                'simplemde',
                'simplemde_css',
                'toggle_head',
                'fancybox_css',
                'fancybox'
            ]
        },
        debug: true,
        devtool: 'source-map',
        output: {
            path: path.resolve(process.cwd(),'dist/'),
            filename: '[name].js',
            chunkFilename: '[name].min.js',
            publicPath: ''
        },
        resolve: {
            alias: AddResolve(require('../config/alias'))
        },
        plugins,
        module: {
            loaders
        }
};