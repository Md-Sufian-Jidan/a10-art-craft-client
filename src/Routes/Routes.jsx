import {createBrowserRouter} from "react-router-dom";
import App from '../App'
import Root from "../Layouts/Root";
import AddProduct from "../Pages/AddProduct";
import Register from '../Components/Register/Register'
import Login from '../Components/Login/Login'
import AllCrafts from "../Components/AllItems/AllCrafts";
import Error from "../Components/Error/Error";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <App />
        },
        {
            path:'/addCraft',
            element: <ProtectedRoute><AddProduct /></ProtectedRoute>
        },
        {
            path:'/allCrafts',
            element: <AllCrafts />
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