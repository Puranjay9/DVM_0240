import React, { useState, useEffect } from 'react';
import './searchbar.css'
import getBooks from './request.js';

export default function SearchBar(){
    const [books, setBooks] = useState([]);
    const[input, setInput] = useState("");
    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const data = await getBooks();
            const booksData = data.results; 
            setBooks(booksData);
            console.log(data)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchBooks();
      }, [])


    return(
        <div className="searchbar">
        <img src="search-icon.png" className="sicon" alt=''></img>
        <input type="text" className="search" placeholder="Search here"
        value={input}

        ></input>
        </div>
    )
}