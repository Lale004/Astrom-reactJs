import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { TbHeartFilled} from "react-icons/tb";


function Navbar() {

  return (
    <>

      <div className="navbar">
        <div className="container">
          <nav>
           <div className="nav-img">
              <Link to="/"> <img src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/LOGO-1.png" alt="" />
           </Link> </div>
          
              <ul className="ul-bir ul-home">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </ul>
    
              
                  {" "}
                  <div className="nav-heart">
  <NavLink to="/favorites">
                    <TbHeartFilled  />  </NavLink>
                  </div>
              

      


     
          </nav>
          </div>
      </div>
    </>
  );
}

export default Navbar;
