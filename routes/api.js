const route=require("express").Router()
const db = require("../dbfunctions.js");
route.post("/v1", (req, res) => {

    var x = req.body.level;
    res.json(db.typing(x));
})
module.exports=route;