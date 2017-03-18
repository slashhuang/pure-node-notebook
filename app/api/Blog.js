/*
 * 博客增删改查相关
 */
let {store} = require('../database');
module.exports = {
	'/blog/add.action':(req,res)=>{
		let {body} = req.context;
		/*
		 * status:-1,
		 * data:error
		 */
		return store('blog_list',body).then((dbResponse)=>{
			let { data,status} = dbResponse
			return {
				body:{
					blogId:data
				},
				status:status,
				message:"数据存储成功"
			}
		})
	},
	'/blog/delete.action':()=>{
			
	}
}