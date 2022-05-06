var mongoose = require('mongoose');
var schema = mongoose.Schema;

var articleSchema = new schema({
  title:{type:String},
  describtion:{type:String},
  tags:[String]
},{timestamps:true})

articleSchema.index({tags: 1});
articleSchema.index({title: "text", describtion:"text"});  

module.exports = mongoose.model('article', article);