import React  from "react";
import './display.css';
import Explore from './explore.jsx'
import SearchBar from "./searchbar.jsx";
import { BookContextProvider } from './BookContext.js';
import SearchResult from "./searchresult.js";

export default function  Display(){


    return(
        <div className="display">
            <div className="backimg">
            <div className="style1"></div>
            <div className="interaction">
                <div className="message">
                    <h1>Fill Your Mind</h1>
                    <h2>Explore new worlds from authors</h2>
                </div>
                <BookContextProvider>
                <SearchBar/>
                <SearchResult/>
                </BookContextProvider>
               
            </div>
            <div className="style2"></div>
            </div>
            <Explore/>
        </div>
    )
}
