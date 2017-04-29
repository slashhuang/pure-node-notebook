/*
 * mongodb model for blog
 * @Author slashhuang
 * 17/4/25
 */
 const { blogSchema,categorySchema }= require('./schema/')
 const mongoose =  require('mongoose')
//The Mongoose [Model](#model_Model) constructor.
 const Blog = mongoose.model('blog', blogSchema)
 const Category = mongoose.model('category',categorySchema)
 const { transObjectId } = require('./util')

 exports.$_saveBlog = (blog)=>{
    //去重 upsert
    let condition = {title:blog.title}
    let { id } = blog
    if(id){
        condition = { _id:transObjectId(id)}
    }
    blog.date  = new Date().toLocaleString()
    return Blog.findOneAndUpdate(condition,blog,{
        upsert:true,
        new: true
     }).exec()
     .then(db_blog=>{
         return { status:1,data:db_blog}
     })
 }
 exports.$_saveCategory=(category)=>{
     return Category.findOneAndUpdate({name:category.name},category, {upsert:true}).then(category=>{
         return {
            status:1,
            data:category||'新建目录成功'
         }
     })
 }
 //doc: http://mongoosejs.com/docs/queries.html
 exports.$_getCategoryList = ()=>{
     return Category.find().sort({ name: 1 }).exec().then(categoryList=>{
        return {
            status:1,
            data:categoryList
         }
     })
 }
 exports.$_getBlogList = ()=>{
     return Blog.find().sort({ date: 1 }).exec().then(blogList=>{
        return {
            status:1,
            data:blogList
         }
     })
 }
 exports.$_getBlogDetail = (query)=>{
    let condition = query
    let { id } = query
    if(id){
        condition = { _id:transObjectId(id)}
    }
    return Blog.findOne(condition).exec().then(blog=>{
        return {
            status:1,
            data:blog
         }
     })
 }
 exports.$_deleteBlog = (query)=>{
    let condition = query
    let { id } = query
    if(id){
        condition = { _id:transObjectId(id)}
    }
    return Blog.remove(condition).exec().then(blog=>{
        return {
            status:1,
            data:'删除成功'
         }
     })
 }






