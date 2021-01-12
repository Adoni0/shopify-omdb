import React from 'react'

const SearchBar = ({ searchTerm }) => {

    const styles = {
        input: {
            width: 300,
            height: 20
        }
    }

    return (
            <input style={styles.input} type="text" placeholder="Search By Movie Title"/>
    )
}

export default SearchBar
