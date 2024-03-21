import React, { useState, useEffect ,useContext } from 'react';
import { Link } from 'react-router-dom';
import './row.css'
import { BookContext } from './BookContext';

const refreshPage = () => {
  window.location.reload();
};


export default function Row(props){
        // const [books, setBooks] = useState([]);
        const [hoverStates, setHoverStates] = useState([]);
        const { books ,favorites, addToFavorites , removeFromFavorites } = useContext(BookContext);
        // useEffect(() => {
        //   const fetchBooks = async () => {
        //     try {
        //       const data = await getBooks();
        //       const booksData = data.results; 
        //       setBooks(booksData);
        //       console.log(data)
        //     } catch (error) {
        //       console.error(error);
        //       setError(error);
        //     }
        //   };
      
        //   fetchBooks();
        // }, [])

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

        const favoritechecker = (work_id) =>{
          const boolean = favorites.some((book) => book.work_id === work_id);
          return  boolean ;
    
        }

        return(
            <div className='row'>
                <h1 className='title'>{props.title}</h1>
                <div className='book-container'>
                    {books.length>0 ? (books.map((book,index) => (
                       <div className='block-wrapper' key={index}>
                       <Link to={`/BlockDetail/${index}`} key={index}>
                         <div className='block'
                           style={{
                             backgroundColor: hoverStates[index] ? getRandomColor() : '#ffffff',
                             color: 'black',
                           }}
                           onMouseEnter={() => handleMouseEnter(index)}
                         >
                           <h1 className='title'>{book.title}</h1>
                           <h2 className='author'>By {book.authors}</h2>
                         </div>
                       </Link>
                       <div>
                        {favoritechecker(book.work_id)?
                        <button className='button'
                         onClick={() => 
                          {
                            removeFromFavorites(book.work_id);
                            refreshPage();
                          }}
                        >Unfavorite</button>
                        : <button
                        className='button'
                        onClick={() => {
                          addToFavorites(book);
                          refreshPage();
                        } }
                        >Favorite</button>
                      }
                       </div>
                     </div>
                    ))
                  ): <h1>loading...</h1>}
                </div>
            </div>
        );
}