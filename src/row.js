import React, { useState, useEffect } from 'react';
import './row.css'
import getBooks from './request.js';

export default function Row(props){
        const [books, setBooks] = useState([]);
        const [hoverStates, setHoverStates] = useState([]);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchBooks = async () => {
            try {
              const data = await getBooks();
              const booksData = data.results; 
              setBooks(booksData);
              console.log(data)
            } catch (error) {
              console.error(error);
              setError(error);
            }
          };
      
          fetchBooks();
        }, [])

        const handleMouseEnter = (index) => {
          const newHoverStates = [...hoverStates];
          newHoverStates[index] = true;
          setHoverStates(newHoverStates);
         };
  
        //const handleMouseLeave = (index) => {
          //const newHoverStates = [...hoverStates];
          //newHoverStates[index] = false;
          //setHoverStates(newHoverStates);
        //};
  
        const getRandomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        if (error) {
          return <div>Error: {error.message}</div>; 
        }

        return(
            <div className='row'>
                <h1 className='title'>{props.title}</h1>
                <div className='book-container'>
                    {books && books.map((book,index) => (
                        <div className='block' key={index}
                        style={{
                          backgroundColor: hoverStates[index] ? getRandomColor() : '#ffffff' 
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      //onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <h1 className='title'>{book.title}</h1>
                            <h2 className='author'>By {book.authors}</h2>
                        </div>
                    ))}
                </div>
            </div>
        );
}