import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography align='left' sx={{flexGrow:1}}>TrialApp</Typography>
                <Button> <Link to={'/'} style={{color:"white"}}>add</Link></Button>
                <Button> <Link to={'/table'} style={{color:"white"}}>view</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Navigation