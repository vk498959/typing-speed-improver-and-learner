const express = require("express");
const app = express();
const index=require("./routes/index.js");
const api=require("./routes/api");
// const valid=require("./middlewares/valid")
const mongoose = require("mongoose")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/",index)
app.use("/api",api)
app.set("view engine", "ejs")
// app.use(valid);

app.listen(8000, () => {
    console.log("server is running on port 8000")
});

mongoose.connect('mongodb://127.0.0.1:27017/typingImprover')
    .then(() => console.log('MongoDB Connected!'));

