import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const NominationsList = ({ nominations, removeNominee }) => {
    return (
        <>
            <p style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>Nominations</p>
            <Carousel>
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
        </>
    )
}

export default NominationsList
