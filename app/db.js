 /*
  * mongodb 数据库操作
  * @Author slashhuang
  * 17/3/17
  * https://mongodb.github.io/node-mongodb-native/
  */
const { MongoClient }= require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017/myBlog';
module.exports = ()=>{
	return Promise.resolve({
		then:(resolve,reject)=>{
			MongoClient.connect(url, function(err, db) {
				  console.log("Connected successfully to server");
				  resolve(db);
			});
		}
	})	
}

