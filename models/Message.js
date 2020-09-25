const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({

    Chatroom:{
        type:mongoose.Schema.type.ObjectId,
        required:'Chatroom is required!',
        ref:"Chatroom",
},
user:{
    type:mongoose.Schema.type.ObjectId,
    required:'User is required!',
    ref:"User",
},
message:{
type:String,
required:"Message is required",
}
    }
);

module.exports = mongoose.model("Message",messageSchema);