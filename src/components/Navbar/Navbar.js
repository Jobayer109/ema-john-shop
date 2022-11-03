import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../Contexts/UserContext";
import './Navbar.css';

const Navbar = () => {
  const [error, setError] = useState(null)
  const {user, logOut} = useContext(AuthContext)


  const handleSignOut = () => {
    logOut()
      .then(result => {
      const user = result.user;
      console.log(user)
    })
  .catch(error => setError(error.message))
  }



  return (
    <div>
      <div className="navbar bg-cyan-600 shadow-lg px-24 h-2">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 navbar">
            
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {user?.uid ?
              <li>
              <Link className="btn btn-outline btn-danger" onClick={handleSignOut} to="/login">Sign Out</Link>
              </li>
              :
              <>
                 <li>
              <Link className="btn btn-outline btn-danger mr-2" to="/register">Register</Link>
            </li>
               <li>
              <Link className="btn btn-outline btn-danger" to="/login">Login</Link>
            </li>
              
              </>
            }
            <li>
              <Link className="text-black">{user?.email }</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
