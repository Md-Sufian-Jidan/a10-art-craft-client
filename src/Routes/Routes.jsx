import {createBrowserRouter} from "react-router-dom";
import App from '../App'
import Root from "../Layouts/Root";
import AddProduct from "../Pages/AddProduct";
import Register from '../Components/Register/Register'
import Login from '../Components/Login/Login'
import Error from "../Components/Error/Error";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import AllCrafts from "../Pages/AllCrafts";
import Card from "../Components/CraftsCard/Card";
import CardDetails from "../Components/CraftsCard/CardDetails";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
            path: '/',
            element: <App />,
          loader: () => fetch ('http://localhost:3000/crafts')
        },
        {
            path:'/addCraft',
            element: <ProtectedRoute><AddProduct /></ProtectedRoute>
        },
        {
            path:'/allCrafts',
            element: <AllCrafts />,
            loader: () => fetch('http://localhost:3000/crafts')
        },
        {
            path:'/register',
            element: <Register />
        },
        {
            path:'/login',
            element: <Login />
        },
        {
          path:'/card',
          element: <Card />,
        },
        {
          path: '/crafts/:id',
          element: <CardDetails />,
          loader: ({params}) => fetch (`http://localhost:3000/crafts/${params.id}`)
        }
      ]
    },
  ]);

export default router;