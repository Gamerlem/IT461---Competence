import React from "react";
import "../css/SearchBox.css"
import { HiOutlineSearch } from "react-icons/hi";

const SearchBox = () => {
    return(
        <div className="search-container">
            <div className="search">
                <input 
                    className = "searchbox" 
                    type = 'search' 
                    placeholder ="search"
                />
            </div>
            <HiOutlineSearch className="search-icon"/>
        </div>
    );
}

export default SearchBox;