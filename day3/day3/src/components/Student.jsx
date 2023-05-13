import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const  student = () => {
    var[inputs,setInputs] = useState({sname:'',sgrade:''})

    const inputHandler = (e)=>{
        const{name,value} = e.target
        setInputs((inputs)=>({...inputs,[name]:value}))
    }
    const readvalues =()=>{
        console.log("clicked")
        console.log("inputs:",inputs);
        axios.post("http://localhost:8080/create",inputs)
        .then((response)=>{
            alert("success")
        })
        .catch(err=>console.log(err))
    } 
    
    
  return (
    <div style ={{paddingTop:'100px'}}>
        <Typography variant='h4'>Add students</Typography>
        <br />
        <TextField label='name' name='sname' value={inputs,sname} onChange={inputHandler} variant='outlined'/>
        <br />
        <TextField label='grade'  value={inputs,sgrade} onChange={inputHandler} variant='outlined'/>
        <br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default student