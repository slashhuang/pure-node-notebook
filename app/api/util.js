/* 
 * @Author slashhuang
 * 17/3/17
 */

 module.exports={
 	shapeResponseJSON:(apiResponse)=>{
 		return JSON.stringify(Object.assign({
 			status:1,
 			body:"",
 			message: "返回成功"
 		},apiResponse))
 	}
 }