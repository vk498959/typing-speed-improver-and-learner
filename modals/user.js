const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const user = new Schema({
    name: { type: String },
    email: { type: String },
    password:{type:String}

});
const usermodel = mongoose.model('user', user);
module.exports=usermodel;