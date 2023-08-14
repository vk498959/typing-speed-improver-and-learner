
const express = require("express");
const app = express();
const index=require("./routes/index.js");
const api=require("./routes/api");
const db=require("./dbfunctions.js");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/",index)
app.use("/api",api)
app.set("view engine", "ejs")

app.listen(8000, () => {
    console.log("server is running on port 8000")
});