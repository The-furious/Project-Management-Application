const express=require("express");
const dotenv=require("dotenv").config();
const app=express();
const port=process.env.PORT || 5000;
const connectDb = require("./Config/dbConnection");
const errorHandler = require("./Middleware/ErrorHandler");
connectDb();
app.use(errorHandler)
app.listen(port, ()=>{
    console.log('Server Running on port',port);
});