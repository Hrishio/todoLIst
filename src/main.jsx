import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/organisms/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Register from './components/organisms/Register.jsx';
import TodoForm from './components/organisms/TodoForm.jsx';
import TodoList from './components/organisms/TodoList.jsx';
import React from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import NavBar from './components/molecules/navs/NavBar.jsx';

const isLoggedIn = () => {
  const userData = localStorage.getItem("users");
  return userData !== null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element:<> <NavBar/><Register/> </>,
  },
  {
    path: "/login",
    element:<> <NavBar/><Login/></>,
  },
  {
    path: "/todos",
    element:<> <NavBar/><TodoForm/><TodoList/></>,
    loader: () => {
      if (!isLoggedIn()) {
        alert('You are not logged in');
        return redirect("/login");
      }
      return null;
    }
  },
  {
    future: {
      v7_startTransition: true,
    },
  }
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
  <RouterProvider router={router} />
  <App />
    </ChakraProvider>
  </React.StrictMode>
)
