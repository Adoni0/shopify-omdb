import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ searchTerm, handleChange, handleEnterKeyPress }) => {

    const styles = {
        input: {
            width: 400,
            height: 25,
            padding: '15px',
            paddingLeft: '30px'
        }
    }

    return (
        <>
            <FaSearch style={{ position: 'relative', left: 25 }}/>
            <input
                onChange={(e) => handleChange(e)}
                value={searchTerm}
                style={styles.input}
                type="text"
                placeholder="Search By Movie Title"
                onKeyDown={(e) => handleEnterKeyPress(e)}
            />
        </>
    )
}

export default SearchBar;
