import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const  Students1 = (props) => {
    var[inputs,setInputs] = useState(props.data)

    const inputHandler = (e)=>{
        const{name,value} = e.target
        setInputs((inputs)=>({...inputs,[name]:value}))
    }
    const readvalues =()=>{
        console.log("clicked")
        console.log("inputs:",inputs);
        if (props.method==="post")
        axios.post("http://localhost:8080/create",inputs)
        .then((response)=>{
            alert("success")
            window.location.reload(false)
        })
        .catch(err=>{console.log(err)})

        if(props.method==="put"){
            axios.put("http://localhost:8080/update/")
            .then(response) => {
                console.log("put"+response);
    
            }
        }
        .catch(err)=>{console.log(err)}
    } 
   
    
  return (
    <div style ={{paddingTop:'100px'}}>
        <Typography variant='h4'>Add students</Typography>
        <br />
        <TextField label='name' name='sname' value={inputs.sname} onChange={inputHandler} variant='outlined'/>
        <br />
        <TextField label='grade'  name='sgrade' value={inputs.sgrade} onChange={inputHandler} variant='outlined'/>
        <br /><br />
        <Button variant='contained' onClick={readvalues}>Submit</Button>
    </div>
  )
}

export default Students1