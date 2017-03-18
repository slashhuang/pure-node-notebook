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
|- tableName表名字
|- id主键
|- content:''
{ id : content}
*/
//decorator
let checkExist = handler=>(tableName,content)=>{
	/*
 	 * 'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
	 * 'wx' - Like 'w' but fails if path exists.
 	 */
 	let tablePath = path.resolve(process.cwd(),'database',tableName+'.db');
 	if(!fs.existsSync(tablePath)){
 		fs.openSync(tablePath,'w')
 	};
 	return handler(tableName,content)(tablePath)

}
//存储
let store = (tableName,content)=>tablePath=>{
 	let id = Math.random().toString(32).substr(-6);
 	return Promise.resolve({
 		then:(resolve,reject)=>{
 			let content = fs.readFileSync(tablePath,'utf8');
 			let contentObj = {};
 			try{ 
 				contentObj = content && JSON.parse(content)
 			}catch(error){}
 			contentObj[id] = content;
 			let newContent = JSON.stringify(contentObj);
 			fs.writeFile(tablePath,newContent,'utf8',(error)=>{
			 	if(error){
			 		reject({
			 			status:-1,
			 			data:error
			 		})
			 	}else{
			 		resolve({
						data:id,
						status:1
					 })
			 	}});
 		}
 	})
 };
 let getAllBlog = (tableName)=>tablePath=>{
 	return Promise.resolve({
 		then:(resolve,reject)=>{
 			fs.readFile(tablePath,'utf8',(error,content)=>{
			 	if(error){
			 		reject({
			 			status:-1,
			 			data:error
			 		})
			 	}else{
			 		resolve({
						data:content,
						status:1
					 })
			 	}});
 		}
 	})
 }
 module.exports={
 	store:checkExist(store),
 	getAllBlog:checkExist(getAllBlog)
 }





