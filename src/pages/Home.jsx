import React, { useEffect, useState, useRef } from "react";
import bannerimg from "../images/home/bannerimg.png";
import applemini from "../images/home/applemini.png";
import Quality from "../images/home/Quality.png";
import Variety from "../images/home/Variety.png";
import farm from "../images/home/farm.png";
import aboutimg from "../images/home/about-img.png";
import apple from "../images/home/Apple.png";
import banana from "../images/home/Banana.png";
import mongo from "../images/home/Mongo.png";
import orange from "../images/home/Orange.png";
import cherry from "../images/home/Cherry.png";
import papaya from "../images/home/Papaya.png";
import team from "../images/home/team.png";
import varietes from "../images/home/varietes.png";
import happy from "../images/home/happy.png";
import natural from "../images/home/natural.png";
import watermelon from "../images/home/watermelon.png";
import strawberry from "../images/home/Strawberry.png";
import collectionfruit from "../images/home/collection-fruit.png";
import collection2 from "../images/home/collection2.png";
import logo2 from "../images/home/logo2.png";
import { Rate } from "antd";
import Button_border from "../components/Button";
import Button_gr from "../components/Button2";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Rectangle from "../images/home/yellow-banner.png";
import GreenGrapes from "../images/home/GreenGrapes.png";
import IndianGuava from "../images/home/IndianGuava.png";
import Pomegranate from "../images/home/Pomegranate.png";
import carouselimg from "../images/home/carouselimg.png";
import customer from "../images/home/customer.png";
import leftarrow from "../images/home/leftarrow.png";
import rightarrow from "../images/home/rightarrow.png";
import Weforbest from "../components/Weforbest";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logocarousel from "../components/Logocarousel";
import { Link } from "react-router-dom";

const Home = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const products = [
    {
      fruitimage: apple,
      fruitname: "Apple",
      fruitprice: "200",
      fruitweightunit: "kg",
      newfruit: true,
    },
    {
      fruitimage: banana,
      fruitname: "Banana",
      fruitprice: "60",
      fruitweightunit: "Dozen",
      newfruit: true,
    },
    {
      fruitimage: papaya,
      fruitname: "Papaya",
      fruitprice: "80",
      fruitweightunit: "kg",
      newfruit: true,
    },
    {
      fruitimage: strawberry,
      fruitname: "Strawberry",
      fruitprice: "200",
      fruitweightunit: "Box",
      newfruit: false,
    },
    {
      fruitimage: watermelon,
      fruitname: "Watermelon",
      fruitprice: "150",
      fruitweightunit: "kg",
      newfruit: true,
    },
    {
      fruitimage: mongo,
      fruitname: "Mongo",
      fruitprice: "50",
      fruitweightunit: "Each",
      newfruit: true,
    },
    {
      fruitimage: cherry,
      fruitname: "Cherry",
      fruitprice: "45",
      fruitweightunit: "kg ",
      newfruit: false,
    },
    {
      fruitimage: orange,
      fruitname: "Orange",
      fruitprice: "80",
      fruitweightunit: "kg",
      newfruit: true,
    },
  ];

  const offer = [
    {
      fruitimage: Pomegranate,
      fruitname: "Pomegranate",
      fruitprice: "200",
      fruitweightunit: "kg",
      newfruit: "best offer",
    },
    {
      fruitimage: IndianGuava,
      fruitname: "Indian Guava",
      fruitprice: "200",
      fruitweightunit: "kg",
      newfruit: "best offer",
    },
    {
      fruitimage: GreenGrapes,
      fruitname: "Green Grapes",
      fruitprice: "200",
      fruitweightunit: "kg",
      newfruit: "best offer",
    },
  ];
  const [time, settime] = useState(5 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    setTimeout(() => {
      settime(time - 1000);
    }, 1000);
  }, [time]);

  let totalSec = parseInt(Math.floor(time / 1000));
  let totalMin = parseInt(Math.floor(totalSec / 60));
  let totalHrs = parseInt(Math.floor(totalMin / 60));
  let Days = parseInt(Math.floor(totalHrs / 24));
  let seconds = parseInt(totalSec % 60);
  let minutes = parseInt(totalMin % 60);
  let hours = parseInt(totalHrs % 24);
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const sliderRef = useRef(null);

  const testimonial = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
  };

 
  return (
    <>
      <div className="container-fluid my-lg-5 my-3 px-3">
        <div className="leaf2 my-5">
          <div className="row align-items-center mx-lg-3 mx-sm-1 leaf1 ">
            <div className="col-md-6 col-sm-12 col-12 ">
              <p className="fw-600 fs-20">
                <span>
                  <img src={applemini} alt="" className="img-fluid" />
                </span>
                {}
                Farm to Table, Every Day
              </p>
              <h1 className="display-3 fw-700">
                Discover the Freshest Fruits at{" "}
                <span className="c_CC140D">Fruiting </span>
                <span className="c_2C7D05">Desert! </span>
              </h1>
              <p className="fs-20 fw-500 py-4 text-justify">
                Fruiting Desert, we bring you a vibrant selection of over 20
                premium fruits, handpicked to ensure unbeatable freshness and
                quality. Experience the true taste of freshness with every bite!
              </p>
              <div className="d-flex">
                <Button_gr name="Shop Now" />
               <Link to="/products"> <Button_border name="Our Products" /></Link>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <div className="text-center">
                <img src={bannerimg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="row py-5 mx-3">
            <div className="col-md-4 col-12 mb-3">
              <div className="d-lg-flex d-block align-items-center justify-content-center gradient rounded-3 py-4">
                <img src={farm} className="img-fluid p-3" alt="" />
                <div className="px-3 py-4 text-white">
                  <p className="fw-700 fs-20 mb-2">Farm - Fresh</p>
                  <p>
                    We bring you the freshest fruits directly from local farms
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="d-lg-flex d-block align-items-center justify-content-center b_green rounded-3 py-4">
                <img src={Variety} className="img-fluid p-3" alt="" />
                <div className="px-3 py-4 text-white">
                  <p className="fw-700 fs-20 mb-2">Wide Variety</p>
                  <p>
                    Over 20 types of fruits, we offer something for every taste
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="d-lg-flex d-block align-items-center justify-content-center gradient2 rounded-3 py-4">
                <img src={Quality} className="img-fluid p-3" alt="" />
                <div className="px-3 py-4 text-white">
                  <p className="fw-700 fs-20 mb-2">Quality Assurance</p>
                  <p>
                    Each fruit is carefully selected for high standards of
                    quality
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-3 mt-lg-5 mt-5 align-items-center">
            <div className="col-md-7 col-12 ">
              <div className="position-relative">
                <img src={aboutimg} className="img-fluid mb-3 w-100" alt="" />
                <p className="d-flex align-items-center fw-600 fs-24 Excellence">
                  <span className="c_CC140D display-2 fw-700 pe-3 ">10+</span>{" "}
                  Years of Excellence
                </p>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-sm-2 mt-5">
              <p className="fs-20 fw-600">
                <span>
                  <img src={applemini} className="img-fluid" alt="" />
                </span>{" "}
                About us
              </p>
              <h2 className="display-5 fw-700">
                Welcome to <span className="c_CC140D">Fruiting </span> 
                <span className="c_2C7D05">Desert!</span>
              </h2>
              <p className="my-3 mb-3 line-h fs-20 fw-500 text-justify">
                At Fruiting Desert, we are passionate about bringing the finest
                and freshest fruits directly to you. Our journey began with a
                simple mission to provide our community with a wide variety of
                top-quality fruits sourced from trusted local and exotic farms.
              </p>

             <Link to={"/about"} className=""> <Button_gr name="Learn more" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid leaf3  ">
        <div className="row ">
          <div className="col-12 text-center my-lg-5 my-2">
            <p className="fs-20 fw-600">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>
              Our Products{" "}
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>
            </p>
            <h3 className="display-3 fw-700">
              World of
              <span className="c_CC140D"> Flavor </span>and
              <span className="c_2C7D05"> Freshness</span>
            </h3>
            <p className="fs-20 fw-500">
              At Fruiting Desert, we pride ourselves on offering a diverse range
              of premium fruits, handpicked to ensure the highest quality and
              taste.
            </p>
          </div>
        </div>
        <div className="row mx-lg-5 mx-2 py-4 ">
          {products.map((value, index) => (
            <div className="col-md-3 col-sm-4 col-12 my-3 " key={index}>
              <div className="text-center card-shadow p-3">
                <div className="text-center  position-relative">
                  <img src={value.fruitimage} className="img-fluid" alt="" />
                  <div className="Newfruit fw-700">
                    {value.newfruit ? "Newfruit" : "On Offer"}
                  </div>
                </div>
                <p className="my-2 fw-700 fs-24">{value.fruitname}</p>
                <p className="my-2 fw-700 fs-18">
                  <b>RS. </b>
                  {value.fruitprice} / {value.fruitweightunit}
                </p>
                <p className="my-2 fw-600">
                  {" "}
                  (120review) <Rate disabled defaultValue={4} />
                </p>
              </div>
            </div>
          ))}
          <div className="col-12 mb-5">
            <div className="mx-auto text-center my-4">
              <Link to="/products"><Button_gr name="Learn more" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-lg-5 mt-3">
        <div className="row">
          <div className="col-md-12 col-12 p-0 ">
            <div className="offersec"></div>
            <div className="counter-sec p-4 text-center ">
              <p className="fs-20 fw-600">
                <span>
                  <img src={applemini} className="img-fluid" alt="" />
                </span>{" "}
                Deal of the Week
              </p>
              <h3 className="display-3 fw-700">
                Discover This Week’s
                <span className="c_CC140D"> Special </span>
                <span className="c_2C7D05"> Offer</span>
              </h3>
              <p className="mx-lg-4 mx-3 fw-500 fs-20">
                At Fruiting Desert, we bring you exclusive deals on select
                fruits every day. Don't miss out on our Deal of the Day, where
                you can enjoy premium fruits at unbeatable prices. Check back
                daily for new offers and treat yourself to freshness at a great
                value.
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
            <div className="text-center card-shadow p-3">
              <div className="text-center  Fresh-Deal">
                <img src={cherry} className="img-fluid" alt="" />
                <div className="Newfruit fw-700">Fresh Deal</div>
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
          <div className="col-lg-4 col-sm-4 col-12 gradient rounded-4 my-sm-3 my-0">
            <div className=" position-relative text-white ">
              <div className="text-center ">
                <p className=" pt-3 fw-600 fs-20 m-0">Weeks Deal</p>
                <p className="fw-700 pt-3 m-0 fs-30">Get our Fruit Combo</p>
                <p className="fs-50 fw-700 m-0">30% OFF</p>
              </div>
              <div className=" top-100">
                <img src={collectionfruit} className="img-fluid   " alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-12 ">
            <div className="text-center card-shadow p-3">
              <div className="text-center  Fresh-Deal">
                <img src={mongo} className="img-fluid" alt="" />
                <div className="Newfruit fw-700">Fresh Deal</div>
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
        </div>
      </div>

      <div className="container-fluid pt-lg-5 pt-3 ">
        <Weforbest />
        <div className="row gradient p-lg-4 p-md-3 p-3" ref={sectionRef}>
          <div className="col-md-3 col-sm-6 col-12 client">
            <div className=" d-flex align-items-center ">
              <div className=" me-lg-4 me-2">
                <img src={happy} className="img-fluid " alt="" />
              </div>
              <div className="text-white w-50">
                <div className="counter-wrapper">
                  <p className="fw-700 fs-50 m-0">
                    {inView && <CountUp end={200} duration={5} />} +
                  </p>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 client">
            <div className=" d-flex align-items-center ">
              <div className=" me-lg-4 me-2">
                <img src={natural} className="img-fluid " alt="" />
              </div>
              <div className="text-white w-50">
                <div className="counter-wrapper">
                  <p className="fw-700 fs-50 m-0">
                    {inView && <CountUp end={100} duration={5} />} +
                  </p>
                  <p>Natural Product</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 client">
            <div className=" d-flex align-items-center ">
              <div className=" me-lg-4 me-2">
                <img src={varietes} className="img-fluid " alt="" />
              </div>
              <div className="text-white w-50">
                <div className="counter-wrapper">
                  <p className="fw-700 fs-50 m-0">
                    {inView && <CountUp end={50} duration={5} />} +
                  </p>
                  <p>Fruit Varieties</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 client">
            <div className=" d-flex align-items-center ">
              <div className=" me-lg-4 me-2">
                <img src={team} className="img-fluid " alt="" />
              </div>
              <div className="text-white w-50">
                <div className="counter-wrapper">
                  <p className="fw-700 fs-50 m-0">
                    {inView && <CountUp end={10} duration={5} />} +
                  </p>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 text-center my-lg-5">
            <p className="py-3 fw-600 fs-20">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>
              Our Customer’s Favorites
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>
            </p>
            <h3 className="display-3 fw-700">
              Best Selling
              <span className="c_CC140D"> Products </span>of
              <span className="c_2C7D05"> All Time</span>
            </h3>
            <p className="fs-20 fw-500">
              Discover the fruits that our customers love the most. These
              best-sellers are a testament to our commitment to quality and
              freshness. Try them out and taste why they’re so popular!
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-sm-12  col-12 ">
            <div className="position-relative text-center">
              <img src={Rectangle} alt="" className="img-fluid" />
              <div className="productsec">
                <img src={logo2} className="img-fluid py-4" alt="" />
                <p className="m-0 fs-35">Exclusive</p>
                <h4 className="card-title fs-50 fw-700">50% OFF</h4>
                <button className="gradient text-white btn py-2 px-3">
                  {" "}
                  Get a Deal
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 col-12  py-5 overflow-hidden">
            <Slider {...settings1}>
              {offer.map((value, index) => (
                <div key={index}>
                  <div className="text-center card-shadow p-3 m-3">
                    <div className="text-center position-relative d-flex justify-content-center">
                      <img
                        src={value.fruitimage}
                        className="img-fluid"
                        alt={value.fruitname}
                      />
                      <div className="Newfruit fw-700">{value.newfruit}</div>
                    </div>
                    <p className="my-2 fw-700 fs-24">{value.fruitname}</p>
                    <p className="my-2 fw-700 fs-18">
                      <b>RS. </b>
                      {value.fruitprice} / {value.fruitweightunit}
                    </p>
                    <p className="my-2 fw-600">
                      (120 reviews) <Rate defaultValue={5} />
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Logocarousel/>
        <div className="container-fluid leaf5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12 px-lg-4  px-md-3 px-1">
              <Slider ref={sliderRef} {...testimonial}>
                <div>
                  <div className="positon-relative  testimonial-carousel">
                    <div className="testimonial-card d-md-flex d-block   rounded-3 p-lg-4 p-md-2 p-2 m-3 bor-tb positon-relative">
                      <div className="customer-img">
                        <img src={customer} className="img-fluid" alt="" />
                      </div>
                      <div className="p-2">
                        <p className="fw-700 fs-30 m-0">Aditi Sharma</p>
                        <p className=" fs-18">Customer</p>
                        <p className="fw-700 m-0 fs-20">
                          "The freshest fruits I've ever had!"
                        </p>
                        <p className="fs-18">
                          I love shopping at Fruiting Desert. Their selection is
                          amazing, and the quality is unbeatable.
                        </p>
                        <Rate defaultValue={5} disabled/>
                      </div>
                    </div>
                    <img
                      src={carouselimg}
                      className=" position-absolute  carouselimg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="positon-relative  testimonial-carousel">
                    <div className="testimonial-card d-md-flex d-block   rounded-3 p-lg-4 p-md-2 p-2 m-3 bor-tb positon-relative">
                      <div className="customer-img">
                        <img src={customer} className="img-fluid" alt="" />
                      </div>
                      <div className="p-2">
                        <p className="fw-700 fs-30 m-0">Aditi Sharma</p>
                        <p className=" fs-18">Customer</p>
                        <p className="fw-700 m-0 fs-20">
                          "The freshest fruits I've ever had!"
                        </p>
                        <p className="fs-18">
                          I love shopping at Fruiting Desert. Their selection is
                          amazing, and the quality is unbeatable.
                        </p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                    <img
                      src={carouselimg}
                      className=" position-absolute  carouselimg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="positon-relative  testimonial-carousel">
                    <div className="testimonial-card d-md-flex d-block   rounded-3 p-lg-4 p-md-2 p-2 m-3 bor-tb positon-relative">
                      <div className="customer-img">
                        <img src={customer} className="img-fluid" alt="" />
                      </div>
                      <div className="p-2">
                        <p className="fw-700 fs-30 m-0">Aditi Sharma</p>
                        <p className=" fs-18">Customer</p>
                        <p className="fw-700 m-0 fs-20">
                          "The freshest fruits I've ever had!"
                        </p>
                        <p className="fs-18">
                          I love shopping at Fruiting Desert. Their selection is
                          amazing, and the quality is unbeatable.
                        </p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                    <img
                      src={carouselimg}
                      className=" position-absolute  carouselimg"
                      alt=""
                    />
                  </div>
                </div>
              </Slider>
            </div>
            <div className=" col-lg-6 col-md-12 col-12 arrow-controls my-3 px-3">
              <div className="">
                <p className="fs-18 fw-600">
                  <img src={applemini} alt="" className="img-fluid" /> Clients
                  testimonial{" "}
                </p>
                <h2 className=" fw-700 fs-50 ">
                  What Our <span className="c_CC140D">Customer</span> Are   
                  <span className="c_2C7D05"> Saying</span>
                </h2>
                <p className="fs-20 fw-500 py-3 m-0 text-justify">
                  Our clients consistently praise us for our exceptional
                  freshness,diverse selection, and outstanding customer service.
                  They appreciate our commitment to sustainable practices and
                  the quality of our fruits.
                </p>
              </div>
              <div className="arrows-wrapper">
                <img
                  src={leftarrow}
                  className="me-2"
                  onClick={() => sliderRef.current.slickNext()}
                  alt=""
                />
                <img
                  src={rightarrow}
                  className="ms-2"
                  onClick={() => sliderRef.current.slickPrev()}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
