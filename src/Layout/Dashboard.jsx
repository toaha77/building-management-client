import {
   FaBook,
  FaHome,
  FaImage,
  FaList,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  // const isAdmin = true

  const links = (
    <>
      {isAdmin ? (
        <>
          <li>
            <NavLink to="/dashboard/profile">
              <FaHome></FaHome>
              Admin Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/request">
              <FaList></FaList>
              Agreement Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/announcements">
              <FaBook></FaBook>
              Make Announcement
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUser></FaUser>
              All Users
            </NavLink>
          </li>
        </>
      ) : (
        <>
           
          <li>
            <NavLink to="/dashboard/profile">
              <FaImage></FaImage>
              My Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/payment/:id">
              <FaMoneyBill></FaMoneyBill>
              Make Payment
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaMoneyBill></FaMoneyBill>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/announce">
              <FaList></FaList>
              Announcements
            </NavLink>
          </li>
        </>
        
      )}
      {/* shared nav links */}
      <div className="divider"></div>
      <li>
        <NavLink to="/">
          <FaHome></FaHome>
          Home
        </NavLink>
      </li>
 
    </>
  );

  return (
    <div className="drawer">
      <Helmet>
       <title>RentalPlace - DashBoard</title>
      </Helmet>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
          <h2 className="text-2xl uppercase">
                  Rental<span className="text-green-500">place</span>
                </h2>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {links}
            </ul>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {links}
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
