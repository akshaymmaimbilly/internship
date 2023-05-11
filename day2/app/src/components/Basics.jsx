import { Button, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <h1>AKSHAY M M</h1>
        <Typography variant ='h1'style={{color:'red'}}>AKSHAY M M</Typography>
        <br />
        <TextField label="name"variant="filled"/><br /><br />
        <TextField label="name"variant="standard"/>
        <br /><br />
        <TextField label="name"variant="outlined"/>
        <br /><br />
        
        <Button variant='text'color='secondary'>one</Button><br /><br />
        <Button variant='contained'color='success'>two</Button><br /><br />
        <Button variant='outlined'color='error'>three</Button><br /><br />
    </div>
  )
}

export default Basics