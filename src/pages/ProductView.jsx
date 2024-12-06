import React from 'react'
import CustomersReview from '../components/CustomersReview';
import { Link } from 'react-router-dom';
import Apple from '../images/products/apple1.png';
import { Rate } from 'antd';
import Button_gr from '../components/Button2';
// import gpay from '../images/products/Google_Pay.png'
import paytm from '../images/products/paytm.png'
import phonepe from '../images/products/phonepe.png'
import bhim from '../images/products/bhim.png'
const ProductView = () => {
  return (
    <>
    <div className="sectionone position-relative ">
        <div className="banner-product-view"></div>
        <div className="position-absolute breadcrumbs">
          <p className="fs-24 fw-700 m-0 pb-2 ">
            <Link to="/" className="text-dark">
              {" "}
              Home
            </Link>{" "}
            &gt; <span className="c_CC140D"> Products</span> &gt; <span className="c_CC140D">Apple</span> 
          </p>
          <h1 className="fs-50 fw-700">Products</h1>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row  mx-lg-5 mx-3">
          <div className="col-md-6 col-sm-12 col-12 leaf1">
            <div className="d-flex justify-content-center">
            <img src={Apple} className='img-fluid' alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12 ">
            <h1 className='fs-50 c_CC140D fw-700'>Apple</h1>
            <p className=''><span className='fw-700 fs-20 '>Rs.200/kg   </span>      
              <span className='text-decoration-line-through fs-20'>   Rs 250/kg</span></p>

              <p className='pt-3 fs-20 fw-500'>(200+ Customer Reviews) <Rate defaultValue={4} /></p>
              <p className='fs-20 fw-500 text-justify'>Our apples are handpicked from the finest orchards to ensure you get the freshest and most flavorful fruit. Each apple is crisp, juicy, and packed with essential nutrients. Our apples are a delicious and healthy choice for any occasion.</p>

             <div className="d-flex align-items-center py-4">
             <p className='fw-700 fs-20 m-0 me-4'>Availability :</p> <input type="checkbox"  disabled checked className="form-check-box" />
             </div>
              <Button_gr name="Buy Now" />

              <p className='fw-600 fs-20 pt-3'>We accept </p>
             <div className="">
             <img src={bhim} alt="" className='img-fluid mx-2' />
             <img src={phonepe} alt="" className='img-fluid mx-2' />
             <img src={paytm} alt="" className='img-fluid mx-2' />
             {/* <img src={gpay} alt="" className='img-fluid mx-2' /> */}
             </div>
          </div>
          <div className="pt-4 text-justify">
            <p className='fw-700 fs-24 '>Product Description</p>
            <p className='fw-500 fs-20 py-4 m-0'>Fruiting Desert, we take pride in offering the highest quality apples to our customers. Our apples are carefully handpicked from the finest orchards, ensuring that you receive only the best and most flavorful fruit. From the moment you bite into one of our apples, you'll experience the perfect balance of crispness and juiciness that sets our produce apart. </p>
            <p className='fw-500 fs-20 py-4 m-0'>Our commitment to quality begins at the source. We partner with reputable orchards that practice sustainable farming methods, prioritizing soil health, water conservation, and organic farming techniques. This not only ensures that our apples are free from harmful pesticides and chemicals but also contributes to the health of our environment.  Our apples are grown with care, from the blossom to the harvest, ensuring that each apple is nurtured to perfection. When our apples arrive at Fruiting Desert, they undergo a rigorous quality control process. </p>
            <p className='fw-500 fs-20 py-4 m-0'>Each apple is inspected for size, color, and firmness, ensuring that only the best make it to our shelves. We believe that quality is non-negotiable, and this dedication is reflected in every apple we sell.</p>
          </div>
        </div>
      </div>
    <CustomersReview/>
    </>
  )
}

export default ProductView;