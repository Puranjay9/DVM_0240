import React from "react";
import './navbar.css';

export default  function Navbar(){
    return(
        <div className="nav">
            <div className="logo">
            <h1>Bookstack</h1>
            <h2>your personal library</h2>
            </div>
            <div className="list">
            <ul>
                <li><a href="">Categories</a></li>
                <li><a href="">Authors</a></li>
                <li><a href="">Highest Rated</a></li>
                <li><a href="">Your Collection</a></li>
            </ul>
            </div>
        </div>
    )
}