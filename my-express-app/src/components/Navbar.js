import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { HiOutlineMenu } from 'react-icons/hi';



function Navbar() {

    return (
    <div className="dropdown">
        <h3> <HiOutlineMenu /></h3> 
         <div className="dropdown-content">
         

               <h4><NavLink style={{ textDecoration: 'none', color: "black"}}  to="/" done>Home</NavLink></h4>
                <h4><NavLink style={{ textDecoration: 'none', color: "black"}} to="liked">Liked</NavLink></h4>
                <h4><NavLink style={{ textDecoration: 'none', color: "black"}} to="seen">Seen</NavLink></h4>
                <h4><NavLink style={{ textDecoration: 'none', color: "black"}} to="disliked">Disliked</NavLink></h4>
                <h4><NavLink style={{ textDecoration: 'none', color: "black"}} to="user">User</NavLink></h4> 
    
         </div>
    </div>
  
    );
}

export default Navbar;