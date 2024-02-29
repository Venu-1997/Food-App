import React from 'react';


const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit": "contain"}}>
            <div className="carousel-inner" id='carousel'>
                <div className="carousel-caption">
                <div className="input-group" style={{"zIndex" : "10"}}>
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" />
                    <button type="submit" className="btn btn-outline-warning text-black bg-warning" >Search</button>
                </div>
                </div>
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?sandwich" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?breads" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?tandoori" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?drinks" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?mocktails" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?alcohol" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900×700/?fries" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
    

export default Carousel;
