const express=require("express");
const app=express();
const db=require("./dbfunctions.js");
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.listen(8000,()=>{
    console.log("server is running on port 8000")
});
app.get("/home",(req,res)=>{
    res.sendfile("public/index.html")
})

app.post("/api/v1",(req,res)=>{
    
    var x=req.body.level;
    res.json(db.typing(x));
})
app.get("/",(req,res)=>{
    res.json("this is the more info of this api")
});

