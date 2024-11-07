import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

import SignUp from "../SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
       {
        path:'signUp',
        element:<SignUp></SignUp>
       },
       {
        path:'/checkout/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:1000/services/${params.id}`)
       },
       {
        path:'/bookigns',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
       }
      ]
    },
  ]);

  export default router;