const route=require("express").Router()
const valid=require("../middlewares/valid")
const home=require("../controllers/home")
const index=require("../controllers/index")
const signin=require("../controllers/signin")
const signup=require("../controllers/signup")
const error=require("../controllers/error")
route.get("/",index)
route.get("/home", home)
route.get("/signup", signup)
route.get("/signin", signin)
route.get("*",error)
route.get("/",(req,res)=>{
    res.render("index")
})
route.get("/home", (req, res) => {
    res.render("home", {
        title: "home",
    })
})
route.get("/signup", (req, res) => {
    res.render("signup", {
        title: "sign up",
    })
})
route.get("/signin", (req, res) => {
    res.render("signin", {
        title: "sign in",
    })
})
module.exports=route;