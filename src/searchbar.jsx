import React, { useState, useEffect , useContext} from 'react';
import './searchbar.css'
import { BookContext } from './BookContext';

export default function SearchBar(){
    const {searchQuery , handleSearchChange} = useContext(BookContext);
    return(
        <div className="searchbar">
        <img src="search-icon.png" className="sicon" alt=''></img>
        <input type="text" className="search" placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchChange}
        ></input>
        </div>
    )
}