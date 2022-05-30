import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import "./allTasks.css";

import Box from '@mui/material/Box';

import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


export default function AllTasks() {

    var user = JSON.parse(localStorage.getItem('activeUser'));

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [errorHandle,setError] = useState(null)

    const [userTasks,setData] = useState([])

    function getTasks(){
        axios.get("http://localhost:5000/api/v1/tasks/byUser",{
            headers: {
                ownerid: user.id
            }
        }).then((response)=>{
            console.log(response.data.message);
            setData(response.data.data)
        }).catch((error)=>{
            setError(error.message)
        })
    }

    // X stands for the task id (ObjID / _id: in Mongodb) when I ".map" all the tasks to elemnets
    function deleteTasks(x){
        
        axios.delete("http://localhost:5000/api/v1/tasks/byUser",{
            headers: {
                taskid: x
            }
        }).then((response)=>{
            console.log(response.data.message);
            getTasks();
        }).catch((error)=>{
            setError(error.message)
        })
    }

    function updateTaskTitle(x){
        axios.put("http://localhost:5000/api/v1/tasks/byUser",{},{
            headers: {
                taskid: x,
                newtitle: title
            }
        }).then((response)=>{
            console.log(response.data.message);
            getTasks();
        }).catch((error)=>{
            setError(error.message)
        })
    }

    function updateTaskDesc(x){
        axios.put("http://localhost:5000/api/v1/tasks/byUser",{},{
            headers: {
                taskid: x,
                newdesc: title
            }
        }).then((response)=>{
            console.log(response.data.message);
            getTasks();
        }).catch((error)=>{
            setError(error.message)
        })
    }

    useEffect(() => {
        getTasks();
    },[]);


    //Here should be the original Value
    const [originalValue, setOriginalValue] = useState("");

    const onChange = (event) => {
        setTitle(event.target.value)
    }


    // Here will only unblur the element
    const onKeyDown = (event) => {
        if (event.key === "Enter") {
          event.target.blur();
        }
        if (event.key === "Escape"){
            event.target.value = originalValue;
            event.target.blur();
        }
    }
    
    const onBlur = (event) => {
        if (event.target.value.trim() === "") {
            //Revert back to original Value if input is empty
            event.target.value = originalValue;
            setTitle(originalValue)
        } else {
        //   console.log(title);
        }
    }

    const onFocus = (event) => {
        setOriginalValue(event.target.value)
    }

    const onInput = (event) => {
        if (event.target.scrollHeight > 33) { 
            event.target.style.height = "5px";
            event.target.style.height = (event.target.scrollHeight - 16) + "px";
        }
    }
    
  return (
    <Box
    sx={{
        border: "2px black solid",
        width: {xs: "85%", sm: "70" ,md: "70%"},
        padding: {xs: "1rem",sm: "1rem", md: "2rem"},
        margin: "auto",
        display: "grid",
        gridTemplateColumns: {xs: "1fr",sm: "1fr" , md: "1fr 1fr"},
        rowGap: "1rem",
        columnGap: "1rem",
        marginTop: "2rem",
        borderRadius: "1rem",
        marginBottom: "2rem"
    }}
    >
    {userTasks.map((task, index) => (
    <Fragment key={index}>
    <Card sx={{ minWidth: 275 }} id={task._id}>
    <CardContent>
        <input 
        className="changeInput"
        type="text"
        aria-label="Field name"
        defaultValue={task.title}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={(e)=>{
            onBlur(e);
            if(e.target.value !== originalValue){
                updateTaskTitle(task._id)
            }
        }}
        onFocus={onFocus}
        style={{width: "80%"}}
        >
        </input>

        <textarea 
        rows={4}
        className="changeInput"
        type="text"
        aria-label="Field name"
        defaultValue={task.description}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={(e)=>{
            onBlur(e);
            if(e.target.value !== originalValue){
                updateTaskDesc(task._id)
            }
        }}
        onFocus={onFocus}
        onInput={onInput}
        style={{width: "80%"}}
        >
        </textarea>

    </CardContent>

    <CardActions>
    <Button size="small" onClick={()=>{
            // console.log("Check Task");
        }}>
            <CheckIcon size="small"></CheckIcon>
        </Button>

        <Button size="small" onClick={()=>{
            // console.log("Delete Task");
            deleteTasks(task._id);
        }}>
            <DeleteIcon size="small"></DeleteIcon>
        </Button>

    </CardActions>
    </Card>
    </Fragment>
    ))}
    {userTasks.length === 0 && <h2 style={{margin: "auto",textAlign: "center"}}>No Tasks</h2>}
    </Box>
  )
}
