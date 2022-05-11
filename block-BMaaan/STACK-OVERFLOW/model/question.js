var mongoose = require('mongoose');
var schema = mongoose.Schema;

var questionSchema = new schema({
  title:{type:String,unique:true},
  answer:{type:schema.Types.ObjectId, ref:"answer"},
  tages:{type:String}
}, {timestamps:true});

questionSchema.index({title:1});
module.exports = mongoose.model('question', questionSchema);