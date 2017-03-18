/* 
 * @Author slashhuang
 * 17/3/17
 */

 module.exports={
 	shapeResponseJSON:(jsonBody,message)=>{
 		return JSON.stringify({
 			status:1,
 			body:jsonBody,
 			message: message ||"返回成功"
 		})
 	}
 }