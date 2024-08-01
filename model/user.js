const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
    firstName:{type:String,requied:true},
    lastName:{type:String,requied:true},
    email:{type:String,requied:true},
    password:{type:String,requied:true}
})

module.exports = mongoose.model('User',userSchema);