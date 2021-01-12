import React from 'react'

const SearchBar = ({ searchTerm, handleChange }) => {

    const styles = {
        input: {
            width: 300,
            height: 20
        }
    }


    return (
            <input 
            onChange={(e) => handleChange(e)} 
            value={searchTerm} 
            style={styles.input} 
            type="text" 
            placeholder="Search By Movie Title"
            />
    )
}

export default SearchBar;
