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

 exports.$_saveBlog = (blog)=>{
    //去重 upsert
     return Blog.findOneAndUpdate({title:blog.title},blog,{
        upsert:true
     }).exec()
     .then(db_blog=>{
        if(db_blog){
            return { status:1,data:db_blog}
        }
     })
 }
 exports.$_saveCategory=(category)=>{
     return new Category(category).save().then(category=>{
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
     if(query.id){
        query._id = query.id
        delete query.id
     }
     return Blog.findOne(query).exec().then(blog=>{
        return {
            status:1,
            data:blog
         }
     })
 }






