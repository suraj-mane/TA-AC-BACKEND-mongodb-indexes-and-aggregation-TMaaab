var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
  name:{type:String},
  username:{type:String, index:true,unique:true},
  email:{type:String, index:true,unique:true},
  address:{
    city:{type:String},
    state:{type:String},
    country:{type:String},
    pin:{type:String}
  }
},{timestamps:true})

userSchema.index({state:1,city:1},{unique:true})

module.exports = mongoose.model('user', userSchema);
