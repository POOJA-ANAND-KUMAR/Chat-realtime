require("dotenv").config();

const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  
  mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
  });
  
  mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
  });
   
//bring in the models
require('./models/User');
require('./models/Message');
require('./models/Chatroom');



app.listen(8000,()=>
{
    console.log("Server listening on port 8000");

});