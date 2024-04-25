import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../App'
import Root from "../Layouts/Root";
import AddProduct from "../Pages/AddProduct";
import Register from '../Components/Register/Register'
import Login from '../Components/Login/Login'
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: '/',
            element: <App />
        },
        {
            path:'/addProduct',
            element: <AddProduct />
        },
        {
            path:'/register',
            element: <Register />
        },
        {
            path:'/login',
            element: <Login />
        },
      ]
    },
  ]);

export default router;