import {Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Exp = () =>{
    var[val,setVal]=useState({id:'',age:'',adress:''});
    const inputhandler = (e)=>{
        const{name,value} = e.target
        setVal((val)=>({...val,[name]:value}))
    }
   
 return (
    <div>
        <br /><br />
        <TextField label='name' name='id'value={val.id} onChange={inputhandler}/>
        <br /><br />
        <TextField label='age' name='age'value={val.age} onChange={inputhandler}/>
        <br /><br />       
        <TextField label='adress' name='adress'value={val.age} onChange={inputhandler}/>
        <br /><br />       
        name:  {val.id}<br />
        age:  {val.age}<br />
        adress:  {val.adress}
        
    </div>
  )
}
 export default Exp