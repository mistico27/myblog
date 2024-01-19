const {connection} = require("./DataBase/connection");
const express = require("express");
const cors = require("cors")

///connection
connection();

///create server node
const app = express();
///cors configuration
app.use(cors());
///body to js object
app.use(express.json())///content type app/json
app.use(express.urlencoded({extended:true}))///form url encoded



const rutasArticle = require("./Routes/Routes_Articles");
app.use("/api",rutasArticle);

///routes
app.get("/probando",(req,res)=>{
    console.log("The endpoint probando is working");
    return res.status(200).json({
        curso:"javascript React",
    });
});

//server
app.listen(8087,()=>{
    console.log("Server Running on port selected");
});
