import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonOption = ({ isNominated }) => {
    return (
        <>
            {!isNominated
                ? <Button variant="outline-primary">Nominate</Button>
                : <Button variant="outline-danger">Remove</Button>
            }
        </>

    )
}

export default ButtonOption;
