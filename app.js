const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//bring in the routes or register the routes
app.use(require('./routes/user'));

//setup error handlers
const errorHandlers = require("./handlers/errorHandlers")
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if(process.env.ENV === 'DEVELOPMENT')
{
    app.use(errorHandlers.developmentErrors);
}
else
{
    app.use(errorHandlers.productionErrors);
}

module.exports=app;