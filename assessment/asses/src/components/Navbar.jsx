import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { purple } from '@mui/material/colors';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
 
  return (
    <div ><br /><br /><br /><br /> <AppBar style={{ backgroundColor:'gray' }} >
    <Toolbar>
        <Typography  sx={{flexGrow:1}} align ="left" style={{color:"black",fontSize:10}}>Dashboard</Typography>
        <Button> <Link to={'/'} style={{color:"black",fontSize:10}}>Home</Link></Button>
        <Button> <Link to={'/add'} style={{color:"black",fontSize:10}}>Add</Link></Button>
    </Toolbar>
</AppBar></div>
  )
}

export default Navbar