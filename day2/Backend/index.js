//1.importing express
const express = require('express');

//2.initialising
const app = new express()
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 3.api creation 
app.get("/view",(req,res)=>{
    res.json(".......hello welcome to node js........")
})
app.post("/signup",(req,res)=>{
    res.send(req.body)
    

    
})

// 4. setting port
app.listen(3005,()=>{
    console.log("port 3005 is running");
})