import React from 'react';
import '../css/carousel.css';
import img1 from '../img/02.jpg';
import img2 from '../img/03.jpg';

function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

            <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="Img de robot"/>
            </div>
            <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="Img de robot2"/>
            </div>
            
        </div>
       {/*  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button> */}
        <div className='overlay'>
            <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
                <h3>Conoce al robot que hara tu vida mas fácil!</h3>
                <button className='btn btn-outline-light btn-lg'>Ver mas</button>
            </div>
        </div>
    </div>
  )
}

export default Carousel