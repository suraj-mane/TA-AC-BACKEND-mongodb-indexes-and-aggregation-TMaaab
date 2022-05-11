var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
  name:{type:String},
  username:{type:String,unique:true},
  email:{type:String, unique:true},
  password:{type:String}
}, {timestamps:true});

userSchema.index({username:1});

module.exports = mongoose.model('user',userSchema);