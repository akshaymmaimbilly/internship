import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography  sx={{flexGrow:1}} align ="left">Student app</Typography>
                <Button> <Link to={'/student'} style={{color:"white"}}>Add</Link></Button>
                <Button> <Link to={'/view'} style={{color:"white"}}>view</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Navigation