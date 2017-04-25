

/*
 * api server
 */

let { $_saveBlog } = require('./mongo')
let Router =  require('./router')
const router = new Router()
router.post('/blog.action',ctx=>{
    let {body} = ctx.reqCtx
    return $_saveBlog(body)
});
router.get('/user.action',$_saveBlog);

module.exports = router