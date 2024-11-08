import * as yup from 'yup';

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .max(10, 'Username Cannot exceed 10 characters'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password Cannot exceed 15 characters'),
});

export default registerSchema;
