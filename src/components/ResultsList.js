import React from 'react'
import ButtonOption from './ButtonOption'
import { ListGroup } from 'react-bootstrap'

const ResultsList = ({ searchTerm, title, year }) => {

    const styles = {
        results: {
            fontWeight: 'bold',
            fontSize: 18
        }
    }

    return (
        <>
            <p style={styles.results}>Results for "{searchTerm}"</p>
            <ListGroup>
                <ListGroup.Item>{title} ({year})</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default ResultsList
