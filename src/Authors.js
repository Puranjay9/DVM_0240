import React ,{useContext , useState , useEffect} from "react";
import { BookContext } from './BookContext.js';
import './category.css';

export default function Authors(){
    const { books} = useContext(BookContext);

    // const [author , setAuthors] = useState([]);

    // useEffect(() => {
    //     const fetchAuthor = () => {
    //       const authorsData = books.map((book) => book.authors);
    //       setAuthors(authorsData);
    //     };
    //     fetchAuthor();
    //   }, [books]);
    // console.log(author)

    return(
        <div className="list">
            <h1 className="heading">Books of authors available</h1>
            {books && books.map((book,id) =>(
                <div className="item" key={id}>
                    <h1>{id+1}</h1>
                    <h2>{book.authors}</h2>
                </div>
            ))}
        </div>
    )
}