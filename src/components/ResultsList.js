import React, { useState } from 'react'
import { ListGroup, Button, Jumbotron } from 'react-bootstrap'

const ResultsList = ({ searchTerm, results, addNominee }) => {

    const styles = {
        results: {
            fontWeight: 'bold',
            fontSize: 18
        },
        container: {
            width: 550,
            height: 300,
            overflow: 'auto',
            borderRadius: '15px'
        },
        list: {
            marginTop: 10,
            fontSize: 12
        }
    }


    return (
        <div style={styles.container}>
            <Jumbotron>
            
            <p style={styles.results}>Press ENTER to view results for "{searchTerm}"</p>
            <ListGroup>
                {results.map(movie => (
                    <ListGroup.Item
                    variant="primary" 
                    style={styles.list} 
                    key={movie.imdbID}
                    >~ {movie.Title} ({movie.Year}) 
                    <Button
                    id={movie.imdbID}
                    disabled={!movie.isActive}
                    className="ml-3"
                    size="sm" 
                    variant="dark"
                    onClick={() => addNominee(movie, movie.imdbID)}
                    >
                    Nominate
                    </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </Jumbotron>
        </div>
    )
}

export default ResultsList;
