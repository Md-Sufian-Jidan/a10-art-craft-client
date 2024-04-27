import { createBrowserRouter } from "react-router-dom";
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
import UpdateCraft from "../Components/Update/UpdateCraft";
import MyCart from "../Pages/MyCart";
import CraftCategorySection from "../Components/ArtAndCraftCategory/CraftCategorySection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: () => fetch('http://localhost:3000/crafts')
      },
      {
        path: '/addCraft',
        element: <ProtectedRoute><AddProduct /></ProtectedRoute>
      },
      {
        path: '/allCrafts',
        element: <ProtectedRoute><AllCrafts /></ProtectedRoute>,
        loader: () => fetch('http://localhost:3000/crafts')
      },
      {
        path: '/myCrafts',
        element: <ProtectedRoute><MyCart /></ProtectedRoute>,
        // loader: () => fetch('http://localhost:3000/myCrat')
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/card',
        element: <Card />,
      },
      {
        path: '/crafts/:id',
        element: <ProtectedRoute><CardDetails /></ProtectedRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/crafts/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <ProtectedRoute><UpdateCraft /></ProtectedRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/crafts/${params.id}`)
      },
      {
        path: '/artCrafts',
        element: <CraftCategorySection />,
        loader: () => fetch(`http://localhost:3000/artCrafts`)
      },
    ]
  },
]);

export default router;