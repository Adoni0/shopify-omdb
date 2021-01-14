import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const ResultsList = ({ searchTerm, results, addNominee }) => {

    const styles = {
        results: {
            fontWeight: 'bold',
            fontSize: 18
        },
        container: {
            borderStyle: 'outset',
            width: 550,
            height: 300,
            overflow: 'auto'
        },
        list: {
            marginTop: 10,
            fontSize: 12
        }
    }


    return (
        <div style={styles.container}>
            <p style={styles.results}>Press ENTER to view results for "{searchTerm}"</p>
            <ListGroup>
                {results.map(movie => (
                    <ListGroup.Item 
                    style={styles.list} 
                    key={movie.imdbID}
                    >~ {movie.Title} ({movie.Year}) 
                    <Button
                    id={movie.imdbID}
                    disabled={!movie.isActive}
                    className="ml-3"
                    size="sm" 
                    variant="outline-primary"
                    onClick={() => addNominee(movie, movie.imdbID)}
                    >
                    Nominate
                    </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default ResultsList;
