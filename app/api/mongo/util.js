/*
 * 转换ObjectId
 * 17/4/28
 */
 const mongoose =  require('mongoose')
 exports.transObjectId=id=>{
    return id.length<10?id:mongoose.Types.ObjectId(id)
 }