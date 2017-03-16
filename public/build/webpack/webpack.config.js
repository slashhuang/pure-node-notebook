/*
 * @Author slashhuang
 * 17/3/15
 */

import { plugins,loaders } from './plugin_loader.js';
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
            common: [
                'jquery',
                'imagesloaded',
                'gallery',
                'qrcode',
                'simplemde',
                'simplemde_css'
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
            alias: AddResolve(require('./config_folder/alias'))
        },
        plugins,
        module: {
            loaders
        }
};