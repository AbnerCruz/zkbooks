const express = require("express");
const { dirname } = require("path");
const path = require("path");
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;


//TEMPLATE
app.use(express.static("content"))
//app.use("/content", express.static(__dirname + "/pages"))
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/content/pages/index.html"));
    
})

app.use(router);
app.listen(port,()=>{
    console.log("Server On");
    console.log(__dirname)
})