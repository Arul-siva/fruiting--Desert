import React from 'react'
import applemini from "../images/home/applemini.png";
import collection2 from "../images/home/collection2.png";

const Weforbest = () => {
  return (
    <>
      <div className="container-fluid leaf4">
      <div className="row mx-lg-5 mx-3 my-lg-5 my-3 align-items-center ">
          <div className="col-md-6 col-12 ">
            <p className='fs-20 fw-600'>
              <span>
                <img src={applemini} alt="" className="img-fluid" />
              </span>{" "}
              We for Best
            </p>
            <h2 className="display-5 fw-700">
              Experience the <span className="c_CC140D">Fruiting </span> <br />
              <span className="c_2C7D05">Desert! </span>Difference
            </h2>
            <p className='fs-20 fw-500 text-justify'>
              At Fruiting Desert, we are committed to bringing you the freshest
              and highest quality fruits. Our diverse selection, sustainable
              practices, and exceptional customer service set us apart.
            </p>
            <div className="webest d-flex">
              <ul className="fs-18 fw-500">
                <li>Superior Freshness</li>
                <li>Sustainable Practices</li>
              </ul>
              <ul className="fs-18 fw-500">
                <li>Diverse Selection</li>
                <li>Customer Service</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12 text-center">
            <img src={collection2} className="img-fluid" alt="" />
          </div>
        </div>  
      </div>


    </>
  )
}

export default Weforbest