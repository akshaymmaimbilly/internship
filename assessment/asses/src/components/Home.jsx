import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

    const URL="https://jsonplaceholder.typicode.com/posts"
    
 const Home = () => {
    const[data,setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log("error : "+error);
        })
    },[])
  return (
    <div>

    <Typography variant='h3'style={{color:'#56EED3 '}} align='center'>BLOGS</Typography><br /><br />
   <Grid style={{marginLeft : '5%'}} container spacing={{xs: 2,md: 2}} columns={{xs: 1,md: 1,md: 17}} >
    {
        data.map((blog) => {
            return(
                
                <Grid key={blog.id}item xs={2}sm={5} md={4}>
                    <Card sx={{maxWidth: 300}}style={{margin:10,border:'3px  red',borderRadius:'15px', border:'2px solid #EE56EA'}}>
                        <CardContent>
                            <Typography style={{fontSize:"15px",fontWeight:"bolder",color:'purple'}}>
                                {
                                    blog.title
                                }

                            </Typography><hr />
                            <Typography variant='body2' color="text.secondary">{
                                blog.body
                            }

                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
            )
        })
    }
   </Grid>
</div>

  )
}
export default Home
