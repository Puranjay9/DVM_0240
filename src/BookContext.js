import React, { createContext, useState, useEffect } from 'react';
import getBooks from './request';

export const BookContext = createContext({
    books: [],
    searchQuery: '',
    setSearchQuery: () => {},
    favorites: [],
    addToFavorites: () => {},
    removeFromFavorites: () => {}
});

const cacheFetchBooks = (() => {
    let cache = {};
    return async () => {
        const cacheKey = 'booksCache'; 
        if (cache[cacheKey]) {
            return cache[cacheKey]; 
        } else {
            try {
                const data = await getBooks(); 
                cache[cacheKey] = data.results; 
                return data.results;
            } catch (error) {
                throw error;
            }
        }
    };
})();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const booksData = await cacheFetchBooks(); 
                setBooks(booksData);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (book) => {
        setFavorites(prevFavorites => [...prevFavorites, book]);
    };

    const removeFromFavorites = (work_id) => {
        setFavorites(prevFavorites => prevFavorites.filter((book) => book.work_id !== work_id));
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <BookContext.Provider 
            value={{ books, searchQuery, handleSearchChange, favorites, addToFavorites, removeFromFavorites }}
        >
            {children}
        </BookContext.Provider>
    );
};
