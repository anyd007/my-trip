const express = require("express");
const app = express()
const path = require("path")
const cors = require("cors");


app.use(cors())
app.use(express.json())


app.use(express.static(path.join(__dirname, "../client/build")))
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

const herokuPort = process.env.PORT || 3000
app.listen(herokuPort, ()=>{
    console.log(`Działam na porcie ${herokuPort}`);
})