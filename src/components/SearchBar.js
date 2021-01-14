import React from 'react'

const SearchBar = ({ searchTerm, handleChange, handleEnterKeyPress }) => {

    const styles = {
        input: {
            width: 400,
            height: 25
        }
    }

    return (
            <input 
            onChange={(e) => handleChange(e)} 
            value={searchTerm} 
            style={styles.input} 
            type="text" 
            placeholder="Search By Movie Title"
            onKeyDown={(e) => handleEnterKeyPress(e)}
            />
    )
}

export default SearchBar;
