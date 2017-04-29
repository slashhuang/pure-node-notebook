/*
 * api server
 * @Author slashhuang
 * 17/4/28
 */

let { 
	$_saveBlog,$_saveCategory,
	$_getCategoryList,$_getBlogDetail,
	$_getBlogList,$_deleteBlog 
} = require('./mongo')
let Router =  require('./router')
const router = new Router()
//添加博客
router.post('/blog.action',ctx=>{
    let {body} = ctx.reqCtx
    return $_saveBlog(body)
});
//删除博客
router.post('/deleteBlog.action',ctx=>{
    let {body} = ctx.reqCtx
    return $_deleteBlog (body)
});
//添加分类
router.post('/category.action',ctx=>{
     let {body} = ctx.reqCtx
    return $_saveCategory(body)
});
//获取分类列表
router.get('/categoryList.action',ctx=>{
    return $_getCategoryList()
});
//获取博客列表
router.get('/blogList.action',ctx=>{
    let {query} = ctx.reqCtx
    return $_getBlogList(query)
});
//获取博客详情
router.get('/blogDetail.action',ctx=>{
    let {query} = ctx.reqCtx
    return $_getBlogDetail(query)
});

module.exports = router