// 1.import

const express = require('express');
const studentmodel = require('./model');

// 2.initializing
const app= new express();

// 3.milddleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 3.api
// to post data
app.post('/create',(req,res)=>{
    var result = new studentmodel(req.body)//passing data
    result.save()
    res.send("data added");
})
// to view data

app.get('/view',async(req,res)=>{
    var data =await studentmodel.find();
    res.json(data);
})

// to delete data

app.delete('/delete/:id',async(req,res)=>{
    var id = req.params.id;
   await studentmodel.findByIdAndDelete(id);
    res.send("deleted")
})
// to update
app.put('/update/:id',async(req,res)=>{
    let id=req.params.id
   await studentmodel.findByIdAndUpdate(id,req.body);
    res.send("updated")
})


// 4.port
app.listen(8080,()=>{
    console.log("port is set and running");
})