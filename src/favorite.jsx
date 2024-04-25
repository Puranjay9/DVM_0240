import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from './BookContext';

export default function FavoritesList() {
  const { favorites } = useContext(BookContext);



  return (
    <div className="favorites-list">
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((book, index) => (
          <div key={index}>
            <h2>{index+1}.  {book.title}</h2>
            <p>Author: {book.authors}</p>
          </div>
        ))
      ) : (
        <h2>You don't have any favorites yet.</h2>
      )}
    </div>
  );
}
