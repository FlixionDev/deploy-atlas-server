const express=require('express');
const connect=require('./connect');
const router=require('./route');
require('dotenv').config();
const server=process.env.PORT || 3200;
console.log(server)
const app=express();
app.use(express.json());
app.use('/',router)
connect().then((res,rej)=>{
    app.listen(server,()=>{
        console.log("Server is listening on http://localhost:5000/")
    })
}).catch((err)=>{
    console.log(err);
})