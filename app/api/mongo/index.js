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
    return Blog.findOneAndUpdate(condition,blog,{
        upsert:true
     }).exec()
     .then(db_blog=>{
        if(db_blog){
            return { status:1,data:db_blog}
        }else{
            return Promise.reject({
                status:-1,
                data:"blogNot found"
            })
        }
     })
 }
 exports.$_saveCategory=(category)=>{
     return Category.findOneAndUpdate({name:category.name},category, {upsert:true}).then(category=>{
         return {
            status:1,
            data:category
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
     return Blog.find().sort({ date: -1 }).exec().then(blogList=>{
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






