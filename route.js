const mongoose=require('mongoose');
const express=require('express')
const router=express.Router();
const schema=new mongoose.Schema({
    name:String,
    birthOfYear:String
})

const Users=mongoose.model("user",schema);
router.get('/',async(req,res)=>{
    let user=await Users.find();
    res.send(user)
})
router.post('/',async(req,res)=>{
    let body=req.body;
    let user=await Users.create(body);
    res.send(user);
})
router.patch('/:id',async(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    let user=await Users.findByIdAndUpdate(id,body);
    if(user){
        res.send(body);
    }
})
router.delete('/:id',async(req,res)=>{
    let id=req.params.id;
    let user = await Users.findByIdAndDelete(id);
    if(user){
        res.send({
            message:"data deleted successfully"
        })
    }
})
module.exports=router;