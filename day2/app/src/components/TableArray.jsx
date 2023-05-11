import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
//creation of a table using array
export const TableArray = () => {
    var [names,setNames] = useState([
        {
            name:"akshay",age:22
        },
        {
            name:"leona",age:19
        }
    ])
    

    
  return (
    <div><br /><br /><br /><br />
        <Typography variant='h3'>Table and Array</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Name</TableCell>
                        <TableCell style={{color:"green"}}>Age</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index) => {
                        return(
                        <TableRow>
                            <TableCell key={index}>{value.name}</TableCell>
                            <TableCell key={index}>{value.age}</TableCell>
                        </TableRow>
                              )}
                             )
                    }
                     
                    

                </TableBody>
                
            </Table>
        </TableContainer>
        <br /><br />
    </div>
  )
}
