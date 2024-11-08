import React, { useState } from "react";
import Form from "../molecules/forms/Form";
import { useNavigate } from "react-router-dom";
import CustomButton from "../atoms/button/CustomButton";

const Login = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("users"));
  
  const handleLogin = (data) => {
    if (userData && data.username === userData.username && data.password === userData.password) {
      alert("Login successful");
      navigate("/todos");
    } else {
      alert("Invalid credentials");
    }
  };
  const handleNavigationToRegiter = ()=>{
    navigate('/') 
  }

  return (
    <div>
      <h1 className="heading">Login</h1>
      <Form name="Login" onSubmit={handleLogin} className="login" />
      <CustomButton onClick={handleNavigationToRegiter} name={"Register Here"}>Register here</CustomButton>
    </div>
  );
};

export default Login;
