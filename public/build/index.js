/*
 * @Author slashhuang
 * 17/3/15
 */

 require('babel-register');

 
 var webpack = require('webpack');
 webpack(require('./webpack.config.js'),function(){
    console.log(`run  compilation done ${Date.now()}\n`)
});