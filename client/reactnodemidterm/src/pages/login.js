import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login-signup.css";
import * as ROUTES from '../constants/routes';
import axios from "axios";

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorHandle,setError] = useState(null)
  var user = JSON.parse(localStorage.getItem('activeUser'));


  const submitForm = (e) => {
    e.preventDefault();
    axios.post("https://firstnodedeployment.herokuapp.com/api/v1/users/login",{
    // axios.post("http://localhost:5000/api/v1/users/login",{
      email,
      password
    }).then((response)=>{
      console.log(response.data.message);
      localStorage.setItem('activeUser', JSON.stringify(response.data.user))
      localStorage.setItem('userToken', JSON.stringify(response.data.token))
      navigate(ROUTES.DASHBOARD)
    }).catch((error)=>{
        setError(error.response.data.message)
        console.log(error);
    })
  }

  

  useEffect(() => {
    if (user){
      console.log(user);
      setTimeout(navigate(ROUTES.DASHBOARD),2000);
    }
  },[user]);

  useEffect(()=>{
    document.title ='Login - ToDo App';
},[])


  const isInvalid = password === '' || email === '';
//------->Handle show password visibility Start<-----------
  const [values, setValues] = useState({
      password: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
      // console.log(event.target.value);
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
      <div className="loginForm">
      <img src="https://logos-world.net/wp-content/uploads/2022/02/Dunder-Mifflin-Logo.png" alt="logo"/>
      {errorHandle && <p style={{color:"red"}}>{errorHandle}</p>}
      <TextField
          required
          id="outlined-required"
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
      <Button color="primary" disabled={isInvalid} className="loginButton" variant="contained" onClick={submitForm}
      >Log in</Button>
      <p>Don't have an account? 
          <Link to={ROUTES.SIGNUP}> Sign up</Link>
      </p>
      </div>
      </div>
  )
}
export default Login;