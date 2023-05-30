const route=require("express").Router()
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