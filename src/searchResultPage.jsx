import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from './BookContext';

export default function SearchResultPage() {
    const { books } = useContext(BookContext);
    const params = useParams();
    const [selectedBook, setSelectedBook] = useState(null);

    console.log(books)

    useEffect(() => {
        const foundBook = books.find(book => book.work_id.toString() === params.bookwork_id);
        if (foundBook) {
            setSelectedBook(foundBook);
        } else {
            console.log("No book found with work_id:", params.bookwork_id);
        }
    }, [books, params.bookwork_id]);
    
    

    return (
        <div>
            {selectedBook ? (
                <div>
                    <div className="Title__Authors">
                <h1>{selectedBook.title}</h1>
                <h2>{selectedBook.authors}</h2>
            </div>
            <div className="Extar_Details">
                <h2>Book Type : {selectedBook.book_type}</h2>
                <h2>Category: {selectedBook.categories}</h2>
                <h2>Series : {selectedBook.series_name}</h2>
                <h2>Language : {selectedBook.language}</h2>
            </div>
            <div className="Description">
                {selectedBook.summary}
            </div>
                </div>
            ) : (
                <p>still loading...</p>
            )}
        </div>
    );
}
