import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';




export default  function Navbar(){
    
    return(
        <div className="nav">
            <div className="logo">
            <h1>Bookstack</h1>
            <h2>your personal library</h2>
            </div>
            <div className="listitem">
            <ul>
                <li> <Link to={`/categories`}>Categories</Link></li>
                <li><Link to={`/authors`}>Authors</Link></li>
                <li><a href="">Highest Rated</a></li>
                <li><Link to={`/favorites`} >Favorite</Link></li>
            </ul>
            </div>
        </div>
    )
}