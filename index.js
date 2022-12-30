const express=require('express');
const connect=require('./connect');
const router=require('./route');
const app=express();
app.use(express.json());
app.use('/',router)
connect().then((res,rej)=>{
    app.listen(5000,()=>{
        console.log("Server is listening on http://localhost:5000/")
    })
}).catch((err)=>{
    console.log(err);
})