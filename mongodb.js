

const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/signup")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connected")
})

const signupschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection1",signupschema)

module.exports=collection
