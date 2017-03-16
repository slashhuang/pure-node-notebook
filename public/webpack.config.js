import { plugins,loaders } from './plugin_loader.js';

var utils = require('./util'),
    extend = require('extend'),
    path= require('path'),
    configJSON = require('../config.json'),
    versionType = configJSON['versionType'];

//静态页面打包入口, 自动加上business/static_pages目录
var static_files= utils.add_prefix(require('../config_folder/static_files'),'./business/static_pages/');
//组件打包入口,以require的形式引入组件,放入alias目录,添加components目录名称
var components_files = utils.add_prefix(require('../config_folder/component_files'),'./components/');
//业务打包入口
var main_files = utils.add_prefix(require('../config_folder/main_files'),'./business/');
//设定别名
var moduleAlias = require('../config_folder/alias');

var common={
    common: [
        'jquery',
        'underscore',
        'ES6shim',
        'global',
        'jps',
        'iwjwLog',
        './global/module/reset.css',
        './global/iconfont/iconfont.css',
        'iwjw'
    ]
};
var entry_file = extend(
    main_files,
    static_files,
    common
);
//webpack配置文件
module.exports =  {
        watch: true,
        entry: entry_file,
        debug: true,
        devtool: 'source-map',
        output: {
            path: path.resolve(process.cwd(),'dist/'),
            filename: '[name].js',
            chunkFilename: '[name].min.js',
            publicPath: ''
        },
        resolve: {
            alias: utils.addResolve(extend(moduleAlias,components_files))
        },
        plugins,
        module: {
            loaders
        }
};