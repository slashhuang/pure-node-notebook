/*
 *  mongodb schema for blog
 *  @Author slashhuang
 * 17/4/25
 */


//The Mongoose [Schema](#schema_Schema) constructor
const {Schema} = require('mongoose')


const categorySchema = new Schema({
    name: String,
    id:String
});

const blogSchema = new Schema({
    title: String,
    content:String,
    rawContent:String,
    //http://mongoosejs.com/docs/schematypes.html
    category:categorySchema,
    date: String
},{
    _id:false,
    //http://mongoosejs.com/docs/guide.html#strict
    strict: false
});

module.exports = {
    blogSchema,
    categorySchema
}