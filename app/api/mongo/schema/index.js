/*
 *  mongodb schema for blog
 *  @Author slashhuang
 * 17/4/25
 */


//The Mongoose [Schema](#schema_Schema) constructor
const {Schema} = require('mongoose')

const blogSchema = new Schema({
    title: String,
    content:String,
    category:String
});

const categorySchema = new Schema({
    name: String,
    id:String
});


module.exports = {
    blogSchema,
    categorySchema
}