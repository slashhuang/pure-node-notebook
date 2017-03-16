/**
 * ejs 模板渲染
 * @author slashhuang
 * 17/3/10
 */
let ejs = require('ejs');
let path =require('path');
let fs = require('fs');
module.exports = (()=>{
    let getFilePath = (name)=> path.resolve(process.cwd(),'public/html/',name);
    let layoutPath = getFilePath('layout.html');
    return (HtmlTag,dataSource)=>{
        let layoutString = fs.readFileSync(layoutPath,'utf-8');
        let htmlPath = getFilePath(HtmlTag);
        return ejs.compile(layoutString, 
                {
                    compileDebug:true,
                    filename:getFilePath('./html'),
                    viewExt:'html',
                    localsName: "locals", // 变量的命名空间
                    delimiter: '%' //使用默认的%符号
                })(Object.assign({templateName:htmlPath}, dataSource))
    }
})()