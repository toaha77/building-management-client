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
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";

import PrivateRoute from "../Routes/PrivateRoute"
import UserProfile from "../Pages/Dashboard/UserProfile";
import Announcements from "../Pages/Dashboard/Announcements";
import AdminRoute from "./AdminRoute";
import ShowAnnounce from "../Pages/Dashboard/ShowAnnounce";
import Contact from "../Contact/Contact";
 
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
            {
                path: 'contact',
                element: <Contact></Contact>
            }
             
        ]
     },
     {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'cart',
                element : <Cart></Cart>
            },
           
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'announce',
                element: <ShowAnnounce></ShowAnnounce>
            },
            

            // admin route
            {
                path: 'announcements',
                element: <AdminRoute><Announcements></Announcements></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
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