import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import Card from './Card';

const Home = () => {
    const [search, setSearch] = useState("");
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        const res = await fetch("http://localhost:5070/api/items/foodData");
        const data = await res.json();

        setFoodCategory(data[1]);
        setFoodItem(data[0]);
    }

    useEffect(() => {
        loadData();
    },[])




    return (
        <div>
            <NavBar />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"fill"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption">
                        <div className="input-group f-flex justify-content-center" style={{"zIndex" : "10"}}>
                            <input type="search" className="form-control rounded" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} aria-label="Search" />
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
                        <img src="https://source.unsplash.com/random/900×700/?chicken" className="d-block w-100" style={{"filter": "brightness(40%)"}} alt="..." />
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
            <div className='container'>
                {
                    foodCategory.length !== 0 ? foodCategory.map((data) => {
                        return(
                            <div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'>{data.categoryName}</div>
                                <hr />
                                {
                                    foodItem.length !== 0 ? foodItem.filter((item) => (item.categoryName === data.categoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filterItem) => {
                                        return(
                                            <div key={filterItem._id} className='col-12 col-md-6 col-lg-3' ><Card foodData={filterItem}></Card></div>
                                        )
                                    }) :  <div>No Such Data Found</div>
                                }
                            </div>
                        )
                    }) : <div>No Such Item Found</div>
                }


                
            </div>
            <Footer />
        </div>
    )
}

export default Home;
