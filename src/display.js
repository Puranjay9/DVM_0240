import React  from "react";
import './display.css';
import Explore from './explore.js'
import SearchBar from "./searchbar.js";

export default function  Display(){


    return(
        <div className="display">
            <div className="style1"></div>
            <div className="interaction">
                <div className="message">
                    <h1>Fill Your Mind</h1>
                    <h2>Explore new worlds from authors</h2>
                </div>
                <SearchBar/>
               
            </div>
            <div className="style2"></div>
            <Explore/>
        </div>
    )
}
