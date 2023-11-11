const route = require("express").Router()
const db = require("../dbfunctions.js");
const usermodel = require("../modals/user")
route.post("/v1", (req, res) => {

    var x = req.body.level;
    res.json(db.typing(x));
})
route.post("/signup", (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let user = new usermodel({
        name: name,
        email: email,
        password: password
    })
    async function funsave() {
        try {
            await user.save()
            console.log("user saved")
        } catch (err) {
            console.log(err)
        }
    }
    funsave()
    res.json({
        status: "ok"
    })
})



// Code for signin page ::


route.post("/signin", (req,res)=>{

    let email = req.body.email
    let password = req.body.password

    console.log(email)
    
    async function find(){

        try {
            let finded=await usermodel.find({
                email:email,
                password:password
            })
            console.log(finded)
        } catch (err) {
            console.log(err)
        }
    }

    find()
   
console.log("api of sign in work")
res.json({
    status:"ok1"
})
})

module.exports = route;