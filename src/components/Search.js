import React from "react";
import { FormControl } from 'react-bootstrap';
import './Search.css'

function Search({ searchByProductName }) {
    return <FormControl className={"mb-5 search"}
        placeholder="Search "
        aria-label="search"
        onKeyUp={e => searchByProductName(e.currentTarget.value.trim().toLowerCase())}
    />
}
export default Search;