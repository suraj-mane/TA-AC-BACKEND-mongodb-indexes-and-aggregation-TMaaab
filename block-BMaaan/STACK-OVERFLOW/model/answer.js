var mongoose = require('mongoose');
var schema = mongoose.Schema;

var answerSchema = new schema({
  title:{type:String,unique:ture},
  question:{type:schema.Types.ObjectId, ref:"question"}
}, {timestamps:true});

answerSchema.index({title:1});
module.exports = mongoose.model('answer', answerSchema);