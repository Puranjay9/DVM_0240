import { useParams } from "react-router-dom";
import React ,{useContext} from "react";
import './Blockpage.css'
import { BookContext } from './BookContext';

export default function BlockDetailPage(){
    const { books } = useContext(BookContext);

    console.log(books)
    const {work_id} = useParams()
    console.log({work_id})

    if (!books || !books[params.index]) {
        return <div>Loading book details...</div>;
      }
    
      const selectedBook = books[params.index];


    return(
        <div className="Details">
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
                <p>{selectedBook.summary}</p>
            </div>
        </div>
    )
}