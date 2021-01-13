import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const NominationsList = ({ nominations, removeNominee }) => {
    const styles = {
        container: {
            display: 'flex', 
            flexDirection: 'column',
            borderStyle: 'inset',
            width: 450,
            height: 400
        }
    }

    return (
        <div style={styles.container}>
            <p style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Nominations</p>
            {nominations.length ? <Carousel>
                {nominations.map(film => (
                    <Carousel.Item key={film.imdbID + '2'}>
                        <img 
                        className="d-block w-100"
                        src={film.Poster}
                        />
                        <Carousel.Caption>
                            <h3>{film.Title}</h3>
                            <p>{film.Year}</p>
                            <Button 
                            ariant="outline-danger"
                            onClick={(film) => removeNominee(film)}
                            >
                            Remove
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            : <p>No Nominations Made</p>
}
        </div>
    )
}

export default NominationsList
