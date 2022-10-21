const express = require("express");
const { dirname } = require("path");
const path = require("path");
const app = express();
const router = express.Router();
const port = process.env.PORT;


//TEMPLATE
app.use(express.static("content"))
//app.use("/content", express.static(__dirname + "/pages"))
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/content/pages/index.html"));
    
})

app.use(router);
app.listen(port || 3000,()=>{
    console.log("Server On");
    console.log(__dirname)
})