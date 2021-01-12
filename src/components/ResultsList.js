import React from 'react'
import ButtonOption from './ButtonOption'
import { ListGroup } from 'react-bootstrap'

const ResultsList = ({ searchTerm, title, year }) => {

    const styles = {
        results: {
            fontWeight: 'bold',
            fontSize: 18
        },
        container: {
            borderStyle: 'outset',
            width: 400,
            height: 200,
            overflow: 'scroll'
        }
    }

    return (
        <div style={styles.container}>
            <p style={styles.results}>Results for "{searchTerm}"</p>
            <ListGroup>
                <ListGroup.Item>{title} ({year})</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default ResultsList
