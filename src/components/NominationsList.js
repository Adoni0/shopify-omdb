import React from 'react'
import Carousel from 'react-multi-carousel'
import { Button } from 'react-bootstrap'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1050 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1054, min: 885 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 885, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const NominationsList = ({ nominations, removeNominee }) => {

    return (
        <>
        {nominations.length ?
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
             {nominations.map((nominee, index) => (
                    <div key={index}>
                        <CarouselCard 
                        film={nominee}
                        removeNominee={removeNominee}
                        />
                    </div>
                ))}
               
            
        </Carousel>
        : <h3 style={{ marginLeft: 'auto' }}>No Nominations made</h3>
    }
    </>

    )
}

export default NominationsList;

const CarouselCard = ({ film, removeNominee }) => {
  
    return (
        <div className="hvrbox">
            <img 
            src={film.Poster}
            className="hvrbox-layer_bottom"
            />

            <div className="hvrbox-layer_top">
                <div className="hvrbox-text">
                    <p>{film.Title}</p>
                    <p>{film.Year}</p>
                    <Button  
                    variant="outline-danger"
                    onClick={() => removeNominee(film, film.imdbID)}
                    >Remove</Button>
                </div>
            </div>
       
        </div>


    )
}
