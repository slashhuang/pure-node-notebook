/*
 *  @Author slashhuang
 *  使用mongodb
 *  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
 *  17/3/17
 * http://man7.org/linux/man-pages/man2/open.2.html
 */
const fs = require('fs');
const path = require('path')
/*
|
|- collection表名字
|- content:''
*/
//存储
let store = (collection,content)=>tablePath=>{
 	return Promise.resolve({
 		then:(resolve,reject)=>{
		 	collection.insertOne({
				content:body
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
 		}
 	})
 };
 module.exports={
 	store,
 }





