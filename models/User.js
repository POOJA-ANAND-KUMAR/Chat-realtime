const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
    required:'Name is required!',
},email:{
    type:String,
    required:'Email is required!',
},
password:{
    type:String,
    required:'Password is required!',
}},
{
    timestamps:true , // this is to show when the user was created
}

);

module.exports = mongoose.model("User",userSchema);