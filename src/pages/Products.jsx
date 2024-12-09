import React, { useState, useEffect } from "react";
import applemini from "../images/home/applemini.png";
import apple from "../images/home/Apple.png";
import banana from "../images/home/Banana.png";
import mongo from "../images/home/Mongo.png";
import orange from "../images/home/Orange.png";
import cherry from "../images/home/Cherry.png";
import papaya from "../images/home/Papaya.png";
import watermelon from "../images/home/watermelon.png";
import strawberry from "../images/home/Strawberry.png";
import blaclgrapes from "../images/products/Black Grapes.png";
import Blueberry from "../images/products/Blueberry.png";
import Chikoo from "../images/products/Chikoo.png";
import GreenGrapes from "../images/products/GreenGrapes.png";
import Guava from "../images/products/Guava.png";
import Jackfruit from "../images/products/Jackfruit.png";
import Kiwi from "../images/products/Kiwi.png";
import Lychee from "../images/products/Lychee.png";
import Pear from "../images/products/Pear.png";
import Pineapple from "../images/products/Pineapple.png";
import Plums from "../images/products/Plums.png";
import umberlla from "../images/products/umberlla.png";
import Pomegranate from "../images/products/Pomegranate.png";
import watermelon2 from "../images/products/watermelon.png";
import dragan from "../images/products/draganfruit.png";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Button_gr from "../components/Button2";
import Logocarousel from "../components/Logocarousel";
import axios from "axios";
const Products = () => {
  // const products = [
  //   {
  //     fruitimage: blaclgrapes,
  //     fruitname: "Blacl Grapes",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Blueberry,
  //     fruitname: "Blueberry",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Chikoo,
  //     fruitname: "Chikoo",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: GreenGrapes,
  //     fruitname: "Green Grapes",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Guava,
  //     fruitname: "Guava",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Jackfruit,
  //     fruitname: "Jackfruit",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Kiwi,
  //     fruitname: "Kiwi",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Lychee,
  //     fruitname: "Lychee",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Pear,
  //     fruitname: "Pear",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Pineapple,
  //     fruitname: "Pineapple",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Plums,
  //     fruitname: "Plums",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: Pomegranate,
  //     fruitname: "Pomegranate",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: apple,
  //     fruitname: "Apple",
  //     fruitprice: "200",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: banana,
  //     fruitname: "Banana",
  //     fruitprice: "60",
  //     fruitweightunit: "Dozen",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: papaya,
  //     fruitname: "Papaya",
  //     fruitprice: "80",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: strawberry,
  //     fruitname: "Strawberry",
  //     fruitprice: "200",
  //     fruitweightunit: "Box",
  //     newfruit: false,
  //   },
  //   {
  //     fruitimage: watermelon,
  //     fruitname: "Watermelon",
  //     fruitprice: "150",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: mongo,
  //     fruitname: "Mongo",
  //     fruitprice: "50",
  //     fruitweightunit: "Each",
  //     newfruit: true,
  //   },
  //   {
  //     fruitimage: cherry,
  //     fruitname: "Cherry",
  //     fruitprice: "45",
  //     fruitweightunit: "kg ",
  //     newfruit: false,
  //   },
  //   {
  //     fruitimage: orange,
  //     fruitname: "Orange",
  //     fruitprice: "80",
  //     fruitweightunit: "kg",
  //     newfruit: true,
  //   },
  // ];
  const [SearchPro, setSearchPro] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
   
    fetchData();
    
    return () => {
      controller.abort();
    };
  }, []); 

   // fetchData  from DB
   const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products", {
        signal,
      });
      console.log("All products", response.data);
      setAllProducts(response.data);
      setSearchPro(response.data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Failed to fetch reviews", error);
      }
    }
  };
  const products = allProducts;

  const [time, setTime] = useState(22 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  let totalSec = parseInt(Math.floor(time / 1000));
  let totalMin = parseInt(Math.floor(totalSec / 60));
  let totalHrs = parseInt(Math.floor(totalMin / 60));
  let Days = parseInt(Math.floor(totalHrs / 24));
  let seconds = parseInt(totalSec % 60);
  let minutes = parseInt(totalMin % 60);
  let hours = parseInt(totalHrs % 24);

  const sliderContent = [
    {
      id: 1,
      name: "Buy 1 Kg & Get 1/2 Kg FREE",
      price: 150,
      oldPrice: 200,
      reviews: 120,
      image: watermelon2,
    },
    {
      id: 2,
      name: "Buy 1 Kg & Get 1/2 Kg FREE",
      price: 150,
      oldPrice: 200,
      reviews: 120,
      image: watermelon2,
    },
    {
      id: 3,
      name: "Buy 1 Kg & Get 1/2 Kg FREE",
      price: 150,
      oldPrice: 200,
      reviews: 120,
      image: watermelon2,
    },
  ];
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
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

  // search option

  const searchProduct = (e) => {
    const getValu = e.target.value.toLowerCase();
    const searchValu = products.filter((products) =>
      products.name.toLowerCase().includes(getValu)
    );
    setSearchPro(searchValu);
  };

  return (
    <>
      <div className="sectionone position-relative ">
        <div className="banner-img-prod"></div>
        <div className="position-absolute breadcrumbs">
          <p className="fs-24 fw-700 m-0 pb-2 ">
            <Link to="/" className="text-dark">
              {" "}
              Home
            </Link>{" "}
            &gt; <span className="c_CC140D"> Products</span>
          </p>
          <h1 className="fs-50 fw-700">Products</h1>
        </div>
      </div>

      <div className="container-fluid  leaf7">
        <div className="row ">
          <div className="col-lg-12  text-center">
            <p className="fs-20 fw-600">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
              Our Premium Products
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
            </p>
            <h2 className="display-5 fw-700">
              <span className="c_CC140D">Savor </span>of the
              <span className="c_2C7D05"> Freshness</span>
            </h2>
            <p className="my-3 mb-3 line-h fs-18 fw-500 text-center mx-3">
              At Fruiting Desert, we take pride in offering a diverse array of
              the freshest, highest-quality fruits. Each piece is carefully
              selected to ensure it meets our stringent standards for taste and
              freshness.
            </p>
          </div>
        </div>
        <div className="row mx-lg-5 mx-lg-3 mx-1  mt-lg-5 mt-3">
          <div className="d-flex justify-content-end search  ">
            <input
              className="form-control w-auto gradient-border  rounded-3 search"
              type="search"
              placeholder="Search"
              onChange={searchProduct}
            />
          </div>
          {SearchPro.length > 0 ? (
            SearchPro.map((value, index) => (
              <div className="col-md-4 col-lg-3 col-xl-3 col-sm-4 col-12 my-3" key={index.id}>
                <Link to="/product-list">
                  <div className="text-center card-shadow p-3 text-dark">
                    <div className="text-center position-relative product-img">
                      <img
                        src={`http://localhost:5000/getImage/${value.image}`}
                        className="img-fluid" 
                        alt=""
                      />
                      <div className="Newfruit fw-700">
                        {value.newFruit ? "Newfruit" : "On Offer"}
                      </div>
                    </div>
                    <p className="my-2 fw-700 fs-24">{value.name}</p>
                    <p className="my-2 fw-700 fs-18">
                      <b>RS. </b>
                      {value.price}/Kg
                    </p>
                    <p className="my-2 fw-600">
                      {" "}
                      (120 reviews){" "}
                      <Rate allowHalf disabled defaultValue={value.rating} />
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h2>Product not found</h2>
          )}
        </div>
        <div className="row mt-5 mx-lg-5 mx-md-4 mx-lg-3 mx-1  align-items-center">
          <div className="col-md-6 col-sm-12 col-12">
            <div className="gradient rounded-3">
              <div className="">
                <div className="row my-lg-5 my-3 align-items-center">
                  <div className="col-6 position-relative umberlla1">
                    <div className="position-absolute umberlla">
                      <img src={umberlla} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-6 text-center text-white ">
                    <p className="fs-18 fw-500 m-1 ">Summer Special</p>
                    <p className="fs-25 fw-700 m-1 ">Juicy Fruit Deals</p>
                    <p className="fs-50 fw-700 m-1 ">40% OFF</p>
                    <button className="fs-20 fw-500 rounded-3 border-0 ">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            <Slider {...settings2}>
              {sliderContent.map((item) => (
                <div
                  key={item.id}
                  className="p-3 m-1 bor-right special-offer d-block d-lg-flex justify-content-evenly align-items-center"
                >
                  <div className="align-item-center">
                    <img src={item.image} className="img-fluid" alt="" />
                  </div>
                  <div className="text-center">
                    <p className="fw-700 fs-18 gradiant-text m-0">
                      {item.name}
                    </p>
                    <p className="fw-700 fs-45 gradiant-text m-0">
                      1/2 Kg FREE
                    </p>
                    <p className="my-2 fs-18">
                      <b>RS. {item.price}/</b>kg{" "}
                      <span className="text-decoration-line-through">
                        Rs. {item.oldPrice}kg
                      </span>
                    </p>
                    <p className="my-2 fw-600">
                      ({item.reviews} reviews) <Rate defaultValue={4} />
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-lg-5 mt-3">
        <div className="row">
          <div className="col-md-12 col-12 p-0 ">
            <div className="product-banner-sec mt-5"></div>
            <div className="counter-sec p-4 text-center ">
              <p className="fs-20 fw-600">
                <span>
                  <img src={applemini} className="img-fluid" alt="" />
                </span>{" "}
                Deal of the Week
              </p>
              <h3 className="display-3 fw-700">
                Grab Our
                <span className="c_CC140D"> Limited Time </span>
                <span className="c_2C7D05"> Monthly Deals</span>
              </h3>
              <p className="mx-lg-4 mx-lg-3 mx-1 fw-500 fs-20">
                Each month, we bring you exclusive deals on our freshest and
                most popular fruits. Enjoy these amazing discounts and savor the
                flavors of the season. Hurry, these offers are available for a
                limited time only!
              </p>
              <p className="counting-numbers  my-4">
                <span className="my-3">
                  <span className=" CC140D fw-600 mx-2 fs-20 px-3 py-3   rounded-4">
                    <span className="fw-700 fs-35 ">{Days}</span> Days{" "}
                  </span>
                  <span className=" CC140D fw-600 mx-2 fs-20 px-3 py-3   rounded-4">
                    <span className="fw-700 fs-35 ">{hours}</span> Hrs{" "}
                  </span>
                </span>
                <span className="my-3">
                  <span className=" b_green fw-600 mx-2 fs-20 px-3 py-3   rounded-4">
                    <span className="fw-700 fs-35 ">{minutes}</span> Mins{" "}
                  </span>
                  <span className=" b_green fw-600 mx-2 fs-20 px-3 py-3   rounded-4">
                    <span className="fw-700 fs-35 ">{seconds}</span> Secs{" "}
                  </span>
                </span>
              </p>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-4 col-12 ">
            <div className="text-center card-shadow p-3 my-2">
              <div className="text-center  Fresh-Deal">
                <img src={cherry} className="img-fluid" alt="" />
                <div className="Newfruit fw-700">Monthly Deal</div>
              </div>
              <p className="my-2 fw-700 fs-24">Cherries</p>
              <p className="my-2 fw-700 fs-18">
                <b>RS. </b>
                350 / Kg{" "}
                <span className="text-decoration-line-through">Rs. 450/Kg</span>
              </p>
              <p className="my-2 fw-600">
                {" "}
                (120review) <Rate defaultValue={3} />
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-12  ">
            <div className="text-center card-shadow p-3 my-2">
              <div className="text-center  Fresh-Deal">
                <img src={Blueberry} className="img-fluid" alt="" />
                <div className="Newfruit fw-700">Monthly Deal</div>
              </div>
              <p className="my-2 fw-700 fs-24">Blueberry</p>
              <p className="my-2 fw-700 fs-18">
                <b>RS. </b>
                350 / Kg{" "}
                <span className="text-decoration-line-through">Rs. 450/Kg</span>
              </p>
              <p className="my-2 fw-600">
                {" "}
                (120review) <Rate defaultValue={3} />
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-12 ">
            <div className="text-center card-shadow p-3 my-2">
              <div className="text-center  Fresh-Deal">
                <img src={Lychee} className="img-fluid" alt="" />
                <div className="Newfruit fw-700">Monthly Deal</div>
              </div>
              <p className="my-2 fw-700 fs-24">Lychee</p>
              <p className="my-2 fw-700 fs-18">
                <b>RS. </b>
                350 / Kg{" "}
                <span className="text-decoration-line-through">Rs. 450/Kg</span>
              </p>
              <p className="my-2 fw-600">
                {" "}
                (120review) <Rate defaultValue={3} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  py-5">
        <div className="row ">
          <div className="col-md-12 p-0">
            <div className="staytuned position-relative">
              <div className="position-absolute draganfruit">
                <img src={dragan} alt="" className="img-fluid" />
              </div>
              <div className="position-absolute Stay-Tuned   text-center">
                <p className="fs-20 fw-600">For Enquiry</p>
                <h2 className="fs-50 fw-700 ">
                  Coming Soon, <span className="c_CC140D">Dragon Fruit</span>{" "}
                  <span className="c_2C7D05">Delight !</span>
                </h2>
                <Link to="/contact">
                  <Button_gr name="Contact Us" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Logocarousel />
    </>
  );
};

export default Products;
