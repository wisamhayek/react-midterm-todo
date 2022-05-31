import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import axios from "axios";

export default function AddTaskForm() {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [errorHandle,setError] = useState(null)

    var user = JSON.parse(localStorage.getItem('activeUser'));

    function addTask(){
        // axios.post("http://localhost:5000/api/v1/tasks",{
        axios.post("https://firstnodedeployment.herokuapp.com/api/v1/tasks",{
            title: title,
            description: description,
            user: user.id,
            ownerID: user.id
        }).then((response)=>{
            console.log(response.data.message);
        }).catch((error)=>{
            setError(error.message)
        })
        setTitle("");
        setDescription("");
    }
    
    function refreshPage() {
        window.location.reload(false);
      }

    const isInvalid = title === '' || description === '';

  return (
    <Box
    sx={{
        border: "none",
        width: {xs: "80%", md: "60%"},
        padding: {xs: "1rem", md: "2rem"},
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        marginTop: "2rem",
        borderRadius: "2rem",
        boxShadow: "1rem 1rem 10px 0px #3c8db2"
    }}
    >
    <Typography variant="h4" gutterBottom component="div">
        Add Task
    </Typography>
    {errorHandle && <p style={{color:"red"}}>{errorHandle}</p>}
        <TextField
            required
            id="outlined-required"
            className="titlelInput"
            label="Task title"
            value={title}
            onChange={({target})=>setTitle(target.value)}
            sx={{margin: "auto",width: { xs: '100%', md: '50%' }}}
        />
        <TextField
            id="outlined-multiline-static"
            label="Description"
            required
            multiline
            rows={4}
            className="descriptionlInput"
            value={description}
            onChange={({target})=>setDescription(target.value)}
            sx={{margin: "auto",width: { xs: '100%', md: '50%' }}}
        />
        <Button disabled={isInvalid} sx={{margin: "auto",width: { xs: '60%', md: '40%' }}} variant="contained" onClick={()=>{
            addTask();
            setTimeout(refreshPage,2000)
            }}>Add Task</Button>
    </Box>
  )
}
