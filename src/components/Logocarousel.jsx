import React from 'react'
import food from "../images/home/food.png";
import friendly from "../images/home/friendly.png";
import gluten from "../images/home/gluten.png";
import matural from "../images/home/matural.png";
import product from "../images/home/product.png";
import Slider from 'react-slick';
const Logocarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
<div className="container-fluid overflow-hidden py-5 my-lg-5 my-md-3 my-2">
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                <div className="d-flex align-items-center justify-content-center">
                  <img src={food} className="img-fluid" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img src={friendly} className="img-fluid" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img src={gluten} className="img-fluid" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img src={matural} className="img-fluid" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img src={product} className="img-fluid" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
    </>
  )
}

export default Logocarousel