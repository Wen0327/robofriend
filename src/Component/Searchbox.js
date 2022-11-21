import React from "react";
import "./../index.css";

const SearchBox = ({searchfield, search_Change}) => {
    return (
        <div >
            <input
                type="search"
                placeholder="search Robots"
                className="pa3  bg-lightest-blue cyber_search"
                // B
                onChange={search_Change}
            />
        </div>
    );
}

export default SearchBox;