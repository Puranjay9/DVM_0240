import React, { useState, useEffect, createContext } from 'react';
import getBooks from './request';

export const BookContext = createContext({
    books: [],
    searchQuery: '',
    setSearchQuery: () => {},
    selectedPage: 1,
    setSelectedPage: () => {},
    favorites: [],
    addToFavorites: () => {},
    removeFromFavorites: () => {},
});

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState(() => {
        const storedBooksData = localStorage.getItem('booksData');
        return storedBooksData ? JSON.parse(storedBooksData) : [];
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPage, setSelectedPage] = useState(1);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBooks = await getBooks(null, null, null, selectedPage);
                const booksData = dataBooks?.results || [];
                setBooks(booksData);
                console.log(dataBooks);
                console.log(books)
                localStorage.setItem('booksData', JSON.stringify(booksData));
            } catch (error) {
                console.error('Error fetching books:', error);
                setError(error);
            }
        };

        fetchData();
    }, [ selectedPage]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (book) => {
        setFavorites(prevFavorites => [...prevFavorites, book]);
    };

    const removeFromFavorites = (work_id) => {
        setFavorites(prevFavorites => prevFavorites.filter(book => book.work_id !== work_id));
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };


    return (
        <BookContext.Provider
            value={{
                books,
                searchQuery,
                setSearchQuery,
                selectedPage,
                setSelectedPage,
                favorites,
                addToFavorites,
                removeFromFavorites,
                handleSearchChange
            }}
        >
            {children}
        </BookContext.Provider>
    );
};
