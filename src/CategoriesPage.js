import React ,{useContext} from "react";
import { BookContext } from './BookContext.js';
import './category.css';

export default function CategoriesPage(){
    const { books} = useContext(BookContext);

    return(
        <div className="list">
            <h1 className="heading">Categories of all books available</h1>
            {books && books.map((book,id) =>(
                <div className="item" key={id}>
                    <h1>{id+1}</h1>
                    <h2>{book.categories}</h2>
                </div>
            ))}
        </div>
    )
}