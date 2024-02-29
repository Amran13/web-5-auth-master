import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Order from './Components/Order.jsx'
import PrivateRoutes from './Components/routes/PrivateRoutes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element:  <Login></Login> 
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path : '/orders',
        element : <PrivateRoutes> <Order></Order> </PrivateRoutes>
      }
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
