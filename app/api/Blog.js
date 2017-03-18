/*
 * 博客相关
 */

module.exports = {
	'/blog/add.action':(req,res)=>{
		return {
			body:req.context.body
		}
	},
	'/blog/delete.action':()=>{
			
	}
}