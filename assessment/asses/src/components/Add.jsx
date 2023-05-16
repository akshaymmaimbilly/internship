import { Button, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

export const Add = () => {
  return (
    <div><br /><br /><br /><br />
        <Typography variant='h3'style={{color:'red'}}>Add Blog </Typography>
        <br /><br />
        <TextField id="outlined-basic" label="Blog Name" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Author Name" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Description" variant="outlined" />
        <br /><br />
        <Button variant='contained'color='secondary'>Add Blog</Button><br /><br />
       
    </div>
  )
}

export default Add