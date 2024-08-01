const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName:{type:String,requied:true},
    lastName:{type:String,requied:true},
    email:{type:String,requied:true},
    password:{type:String,requied:true}
})