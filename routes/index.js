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
module.exports=route;