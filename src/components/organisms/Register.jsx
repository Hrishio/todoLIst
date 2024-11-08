import React from 'react'
import Form from '../molecules/forms/Form'
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
    const handleSubmit = (data) => {
    localStorage.setItem('users', JSON.stringify(data))
    alert('Registration successful')

    navigate('/login');
  }

  return (
    <div>
      <h1 className='heading'>Register</h1>
      <Form name='Register' onSubmit={handleSubmit} schemaName={'register'}/>
    </div>
  )
}

export default Register
