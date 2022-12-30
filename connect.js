//mongodb+srv://flixion:<password>@cluster0.3n1swbg.mongodb.net/?retryWrites=true&w=majority
const mongoose=require('mongoose');

async function connect(){
    return new Promise((res,rej)=>{
        mongoose.connect("mongodb+srv://flixion:flixion@cluster0.3n1swbg.mongodb.net/?retryWrites=true&w=majority",(err)=>{
            if(err){
                rej(err);
            }
        })
        res();
    })
    
}
module.exports=connect;