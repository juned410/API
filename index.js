const express = require("express");
const cors = require("cors")
const App = express();

App.use(cors());

const port = process.env.PORT || 3000 ;

const apiData = require("./DB.json");

App.get("/", (req,res)=>{
    res.send("hello i am live");
});

App.get("/service", (req, res)=>{
    res.send(apiData);
});

App.listen(port,()=>{
    console.log("hello i am live again");
});