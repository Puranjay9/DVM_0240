import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { BookContextProvider } from './BookContext.js';
import BlockDetailPage from './BlockDetailPage.js';
import SearchResult from './searchresult.js'; 
import CategoriesPage from './CategoriesPage.js';
import Authors from './Authors.js';
import FavoritesList from './favorite.jsx'; 
import NotFound from './NotFound.jsx';
import SearchResultPage from './searchResultPage.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/BlockDetail/:index" element={<BlockDetailPage />} />
          <Route path="/books/:bookwork_id" element={<SearchResultPage />} />
          <Route path="/book/:bookid" element={<SearchResult />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BookContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
