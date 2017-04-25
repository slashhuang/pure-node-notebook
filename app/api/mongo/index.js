/*
 * mongodb model for blog
 * @Author slashhuang
 * 17/4/25
 */

 const { blogSchema }= require('./schema/')
 const mongoose =  require('mongoose')
//The Mongoose [Model](#model_Model) constructor.
 const Blog = mongoose.model('blog', blogSchema)
 exports.$_saveBlog = (blog)=>{
     return new Blog(blog).save().then(blog=>{
         return {
            status:1,
            data:blog
         }
     })
 }