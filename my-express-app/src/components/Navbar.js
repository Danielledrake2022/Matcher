import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { HiOutlineMenu } from 'react-icons/hi';



function Navbar() {

    return (
    <div className="dropdown">
        <h3> <HiOutlineMenu /></h3> 
         <div className="dropdown-content">
         

               <li><NavLink style={{ textDecoration: 'none'}} to="/" done>Home</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none'}} to="liked">Liked</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none'}} to="seen">Seen</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none'}} to="disliked">Disliked</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none'}} to="user">User</NavLink></li> 
         </div>
    </div>
  
    );
}

export default Navbar;