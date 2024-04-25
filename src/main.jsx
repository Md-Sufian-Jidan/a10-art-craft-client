import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
