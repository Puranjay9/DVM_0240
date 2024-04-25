import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './row.css';
import { BookContext } from './BookContext';

export default function Row(props) {
    const { books, favorites, addToFavorites, removeFromFavorites, selectedPage,setSelectedPage} = useContext(BookContext); // Add selectedPage and handlePageChange

    const [hoverStates, setHoverStates] = useState([]);

    const handleMouseEnter = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = true;
        setHoverStates(newHoverStates);
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const favoriteChecker = (work_id) => {
        return favorites.some((book) => book.work_id === work_id);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newPageNumber = parseInt(event.target.value);
            if (!isNaN(newPageNumber) && newPageNumber > 0) {
                setSelectedPage(newPageNumber);
            }
        }
    };

    return (
        <div className='row'>
            {/* Title and page number input */}
            <div className='title-container'>
                <h1 className='title'>{props.title}</h1>
                <input
                    type='text'  
                    onKeyDown={handleKeyDown}
                    className='page-input' 
                    placeholder='Enter page number'
                />
            </div>
            
            <div className='book-container'>
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div className='block-wrapper' key={index}>
                            <Link to={`/BlockDetail/${index}`} key={index}>
                                <div
                                    className='block'
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
                                {favoriteChecker(book.work_id) ? (
                                    <button
                                        className='button'
                                        onClick={() => {
                                            removeFromFavorites(book.work_id);
                                        }}
                                    >
                                        Unfavorite
                                    </button>
                                ) : (
                                    <button
                                        className='button'
                                        onClick={() => {
                                            addToFavorites(book);
                                        }}
                                    >
                                        Favorite
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    );
}
