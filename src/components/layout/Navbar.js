import React from "react";
import { Link, NavLink } from "react-router-dom";
// import mw from "./mw.jpg";
import log from "./zh.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'brown',position:"sticky"}}>
      <div className="container">
        <Link exact to="/">
          <img id="im" src={log} width="45px" height="45px" style={{borderRadius:"50%",margin:"0% 5px 0px -35px"}} />
        </Link>
        <h4 style={{color:"white",margin:"0px 40% 0px 5px"}}>Zero Hunger</h4>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{margin:"0% 7% 0% 27%"}}>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/details">
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/picture">UploadPic</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
