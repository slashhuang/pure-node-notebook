

/*
 * api server
 */

let { $_saveBlog,$_saveCategory,$_getCategoryList,$_getBlogDetail } = require('./mongo')
let Router =  require('./router')
const router = new Router()
router.post('/blog.action',ctx=>{
    let {body} = ctx.reqCtx
    return $_saveBlog(body)
});
router.post('/category.action',ctx=>{
     let {body} = ctx.reqCtx
    return $_saveCategory(body)
});
router.get('/categoryList.action',ctx=>{
    return $_getCategoryList()
});
router.get('/blogDetail.action',ctx=>{
    let {query} = ctx.reqCtx
    return $_getBlogDetail(query)
});

module.exports = router