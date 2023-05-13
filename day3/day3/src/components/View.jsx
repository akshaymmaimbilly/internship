import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const view = () => {
  var[students,setStudents] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/view')
    .then(response => {
      console.log("response",response.data);
      setStudents(students=response.data)
    })
    .catch(err=>console.log(err))

  })

  return (
    <div><br /><br /><br /><br />
      <Typography variant='h3'>Marklist Home page</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((value,index)=>{
              return (
                <TableRow>
                  <TableCell>{value.sname}</TableCell>
                  <TableCell>{value.sgrade}</TableCell>
                  <TableCell><Button>delete</Button></TableCell>
                </TableRow>
              )            })}
           
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default view