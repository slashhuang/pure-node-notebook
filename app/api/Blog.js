/*
 * 博客增删改查相关
 */
let {store} = require('../database');
module.exports = {
	'/blog/add.action':(req,res)=>{
		let {body} = req.context;
		let {dbClient} = res;
		/*
		 * status:-1,
		 * data:error
		 */
		let collection = db.collection('blog_list');
		return store(collection,body).then((dbResponse)=>{
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