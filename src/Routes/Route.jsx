import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/AllUsers/AllUsers";
import SignUp from "../Pages/SignUp/SignUp";
import Payment from "../Pages/Dashboard/Payment/Payment";
 
 
 const Route = createBrowserRouter([
     {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/apartment',
                element: <Apartment></Apartment>,
                 loader:()=> fetch('http://localhost:3000/apartmentCount') 

                // loader: ()=> fetch('http://localhost:3000/apartments')

            },
             
        ]
     },
     {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element : <Cart></Cart>
            },{
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
     },
      
     {
        path: '/login',
        element: <Login></Login>
     },
     {
        path: '/signup',
        element: <SignUp></SignUp> 
     }
     
 ])
 
 export default Route;