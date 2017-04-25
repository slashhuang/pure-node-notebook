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
    //去重
     return Blog.findOne({title:blog.title}).exec()
     .then(db_blog=>{
        if(db_blog){
            return {
                status:-1,
                data:`blog with title ${blog.title} already exsisted`
            }
        }else{
             return new Blog(blog).save().then(blog=>{
                 return {
                    status:1,
                    data:blog
                 }
             })
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
 exports.$_getBlogDetail = (query)=>{
    let _id = query.id
     return Blog.findOne({_id}).exec().then(blog=>{
        return {
            status:1,
            data:blog
         }
     })
 }






