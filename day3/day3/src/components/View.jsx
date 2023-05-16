import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  var[students,setStudents] = useState([]);
  var[update,setUpdate] = useState(false);
  var[singlevalue,setsingleValue]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/view')
    .then(response => {
      console.log("response",response.data);
      setStudents(students=response.data)
     
    })
    .catch(err=>console.log(err))

  },[])

  const updateValues = () => {
    setsingleValue(value)
    setUpdate(true);
  }

  const deleteValues = (id) =>{
    console.log("delete clicked",+id);
    axios.delete("http://localhost:8080/delete/"+id)
    .then(response => {
      console.log(response.idvalue)
      alert("deleted");
      window.location.reload(false)
    })
  }
  var finaljsx = <TableContainer>
  <Table>
    <TableHead>
      <TableRow >
        <TableCell>Name</TableCell>
        <TableCell>Grade</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {students.map((value,index)=>{
        return (
          <TableRow key={index}>
            <TableCell>{value.sname}</TableCell>
            <TableCell>{value.sgrade}</TableCell>
            <TableCell><Button onClick={()=>deleteValues(value._id)}>Delete</Button></TableCell>
            <TableCell><Button onClick={()=>updateValues(value)}>Update</Button></TableCell>
          </TableRow>
        )            })}
     
    </TableBody>
  </Table>
</TableContainer>


if(update)
finaljsx = <AddStudent data = {singlevalue} method ="put"/>
  return (
   finaljsx
   
  )
  }

return{
  
}


export default View