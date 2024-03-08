import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import './result.css'

export default function SearchResult(){
    const { books , searchQuery} = useContext(BookContext);
    
    if (!searchQuery) return null;

    const filteredBooks = searchQuery ? books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())||
        book.authors.some((author) => author.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    : books;

    return(
        <div className='results'>
            {filteredBooks.map((book) => (
                 <Link to={`/books/${book.work_id}`} key={book.work_id} 
                 style={{
                    textDecoration : "none",
                    color:"black"
                }}
                 >
                <div className='book' key={book.work_id}>
                    <h2>{book.title}</h2>
                </div>
                </Link>
            ))}
        </div>
    )
}