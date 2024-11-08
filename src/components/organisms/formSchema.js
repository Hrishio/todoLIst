import * as yup from 'yup';

// Login Schema
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
});

// Register Schema
const registerSchema = yup.object().shape({
  username: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
});

//Todo Schema
const todoSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
});

export { loginSchema, registerSchema, todoSchema };
