import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const StateBasics = () => {
    var [pname,setPname]=useState("class");
    var [data,setData]=useState();
    const changename=()=>{
        console.log("clicked");
        setPname(data);
        console.log(pname);
    }
    const readValue = (e)=>{
      setData(e.target.value);
      console.log(data);
    }
  return (
    <div><br /><br /><br /><br />
        <Typography variant='h3'>welcome {pname}</Typography>
        <br /><br />
        <TextField label='name'variant='outlined' onChange={readValue}></TextField><br /><br />
        <Button variant='contained' onClick={changename}>change</Button>
    </div>
  )
}
