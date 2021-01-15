import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FcFilmReel } from 'react-icons/fc'

const Banner = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' fixed="top">
                <Navbar.Brand className="mx-auto">
                    <FcFilmReel />
                Congrats! You've made 5 Nominations!
            </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Banner
