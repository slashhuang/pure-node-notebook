/*
 *  @Author slashhuang
 *  使用mongodb
 *  http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/
 *  17/3/17
 * http://man7.org/linux/man-pages/man2/open.2.html
 * http://mongodb.github.io/node-mongodb-native/2.2/tutorials/collections/
 */
const fs = require('fs');
const path = require('path')
/*
|
|- collection表名字
|- content:''
*/
//存储
let dbDecorator=(handler)=>(collection,content)=>{
	return Promise.resolve({
 		then:handler(collection,content)
 	})
}
let store = (collection,content)=>(resolve,reject)=>{
		collection.insertOne({
				content
		}, (err, result)=>{
			if(err){
				reject({
					status:-1,
					data:err
				})
			}else{
				resolve({
					data:'文章存储成功',
					status:1
				})
			}});	
 		};
let getAllBlog = (collection,content)=>(resolve,reject)=>{
	collection.find({}).toArray((err, docs)=> {
		console.log('====');
		console.log(docs)
		if(err){
				reject({
					status:-1,
					data:err
				})
			}else{
				resolve({
					data:docs,
					status:1
				})
			}});	
	}	 
 
 module.exports={
 	store:dbDecorator(store),
	getAllBlog:dbDecorator(getAllBlog),
 }





