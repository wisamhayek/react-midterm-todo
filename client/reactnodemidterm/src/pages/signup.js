import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./login-signup.css";
import * as ROUTES from '../constants/routes';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


function Register() {

    const [name,setName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorHandle,setError] = useState(null)

    var user = JSON.parse(localStorage.getItem('activeUser'));

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/v1/users/signup",{
          name,
          email,
          password
        }).then((response)=>{
          console.log(response.data.message);
          localStorage.setItem('activeUser', JSON.stringify(response.data.user))
          localStorage.setItem('userToken', JSON.stringify(response.data.token))
          navigate(ROUTES.DASHBOARD)
        }).catch((error)=>{
            setError(error.message)
        })
      }

    useEffect(() => {
        if (user){
          console.log(user);
          setTimeout(navigate(ROUTES.DASHBOARD),2000);
        }
    }, [user]);

    useEffect(()=>{
        document.title ='Sign Up - ToDo App';
    },[])


    const isInvalid = password === '' || email === '' || name === '';

    //------->Handle show password visibility Start<-----------
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword(event.target.value)
    };

    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    //------->Handle show password visibility End<-----------

    return(
        <div className="loginPage">
        {/* https://img.favpng.com/9/14/6/dunder-mifflin-logo-paper-television-image-png-favpng-KWyhwW36hRWjeCYRcdi08HJgz.jpg
        https://www.pngitem.com/pimgs/m/259-2598677_dunder-mifflin-logo-png-page-graphic-design-transparent.png */}
        <div className="loginForm">
        <img src="https://logos-world.net/wp-content/uploads/2022/02/Dunder-Mifflin-Logo.png" alt="logo"/>
        
        {errorHandle && <p style={{color:"red"}}>{errorHandle}</p>}
     
        <TextField
            required
            id="outlined-required1"
            className="namelInput"
            label="Enter your full name"
            value={name}
            onChange={({target})=>setName(target.value)}
        />
        <TextField
            required
            id="outlined-required2"
            className="emailInput"
            label="Enter your email address"
            value={email}
            onChange={({target})=>setEmail(target.value)}
        />

        <FormControl sx={{}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            className="passwordInput"
            onChange={handleChange('password')}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
                </InputAdornment>
            }
            label="Password"
            />
        </FormControl>
        <Button disabled={isInvalid} className="loginButton" variant="contained" onClick={submitForm}
        >Sign Up</Button>
        <p>Already have an account? 
            <Link to={ROUTES.LOGIN}> Sign In</Link>
        </p>
        </div>
        </div>
    )
}
export default Register;