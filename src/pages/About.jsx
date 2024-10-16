import React from "react";
import { Link } from "react-router-dom";
import applemini from "../images/home/applemini.png";
import aboutimg2 from "../images/about/aboutimg-2.png";
import Cultivate from "../images/about/Cultivate.png";
import Fruitiness from "../images/about/Fruitiness.png";
import cardbg from "../images/about/cardbg.png";
import profile1 from "../images/about/profile1.png";
import profile2 from "../images/about/profile2.png";
import profile3 from "../images/about/profile3.png";
import profile4 from "../images/about/profile4.png";
import facebook from "../images/home/facebook-icon.png";
import linkedin from "../images/home/linkedin-icon.png";
import twitter from "../images/home/twitter-icon.png";
import whatapp from "../images/home/whatapp.png";
import Slider from "react-slick";
import Weforbest from "../components/Weforbest";
import Button_gr from "../components/Button2";
import Button_border from "../components/Button";
import { useState } from "react";

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(Array(3).fill(false));

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };
  const [openFAQ2, setOpenFAQ2] = useState(Array(3).fill(false));

  const toggleFAQ2 = (index) => {
    setOpenFAQ2(openFAQ2.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  const faqItems = [
    {
      question: "What types of fruits do you offer?",
      answer:
        "We offer a wide selection of fruits, including apples, bananas, oranges, grapes, strawberries, pineapples, mangoes, and seasonal specialties like peaches and cherries.",
    },
    {
      question: "How do I place an order?",
      answer:
        "You can place an order through our online store by browsing our selection, adding items to your cart, and proceeding to checkout. We also accept orders over the phone if you prefer to speak with a customer service representative.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes, we offer delivery services to most locations. Orders are typically delivered within 24-48 hours depending on your area and availability.",
    },
  ];

  const faqItems2 = [
    {
      question: "How do you ensure the freshness of your fruits?",
      answer:
        "Our fruits are sourced daily from trusted local and exotic farms. We prioritize freshness and quality, ensuring that each fruit is carefully selected and delivered to you at its peak ripeness.",
    },
    {
      question: "What is your return policy?",
      answer:
        "If you receive damaged or spoiled fruit, please contact us within 24 hours of delivery. We will either replace the item or issue a refund based on the situation.",
    },
    {
      question: "How is the fruit packaged?",
      answer:
        "Our fruits are carefully packaged in eco-friendly, recyclable boxes to ensure they arrive fresh and undamaged. We also offer special gift packaging upon request.",
    },
  ];
  const Team = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <div className="sectionone position-relative ">
        <div className="banner-img"></div>
        <div className="position-absolute breadcrumbs">
          <p className="fs-24 fw-700 m-0 pb-2 ">
            <Link to="/" className="text-dark">
              {" "}
              Home
            </Link>{" "}
            &gt; <span className="c_CC140D"> About</span>
          </p>
          <h1 className="fs-50 fw-700">About</h1>
        </div>
      </div>
      <div className="container-fluid px-4 ">
        <div className="row mx-3 mt-lg-5 mt-2 ">
          <div className="col-md-7 col-12  leaf1">
            <div className="position-relative">
              <img src={aboutimg2} className="img-fluid mb-3 w-100" alt="" />
              <p className="d-flex align-items-center fw-600 fs-24 Excellence">
                <span className="c_CC140D display-2 fw-700 pe-3 ">20+</span>{" "}
                Fruit Varieties
              </p>
            </div>
          </div>
          <div className="col-md-5 col-12 mt-5">
            <p className="fs-20 fw-600">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
              About us
            </p>
            <h2 className="display-5 fw-700">
              <span className="c_CC140D">Fruiting </span>
              <span className="c_2C7D05">Desert,</span>Your Destiny of Taste
            </h2>
            <p className="my-3 mb-3 line-h fw-500 fs-18 text-justify">
              At Fruiting Desert, we don’t just sell fruits; we deliver a fresh
              experience that brings nature’s finest produce right to your
              doorstep.
            </p>
            <p className="my-3 mb-3 line-h fw-500 fs-18 text-justify">
              {" "}
              Our story began with a vision to revolutionize the way people
              enjoy fruits by offering unparalleled quality, variety, and
              service.
            </p>
          </div>
        </div>
        <div className="row mx-3 py-5 align-items-center">
          <div className="col-lg-6 col-sm-6 col-12">
            <p className="fs-20 fw-600">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
              Farmed by Quality
            </p>
            <h2 className="display-5 fw-700">
              We <span className="c_CC140D">Cultivate </span>
              <span className="c_2C7D05">Freshness</span>
            </h2>
            <p className="my-3 mb-3 fs-18 fw-500 line-h text-justify">
              At Fruiting Desert, our mission is to revolutionize the way people
              experience fruits. We are dedicated to providing the freshest,
              most delicious fruits sourced from both local and exotic farms.
            </p>
            <p className="my-3 mb-3 fs-18 fw-500 line-h text-justify">
              {" "}
              Every piece of fruit we offer is carefully selected to ensure it
              meets our high standards of quality and taste. We believe that
              everyone deserves access to nature’s best, and we are committed to
              making this a reality for our community.
            </p>
          </div>
          <div className="col-lg-6 col-sm-6 col-12 justify-content-center d-flex ">
            <img src={Cultivate} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row mx-3 align-items-center py-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
            <img src={Fruitiness} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <p className="fs-20 fw-600">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
              Tasted by Nature
            </p>
            <h2 className="display-5 fw-700">
              Your <span className="c_CC140D">Taste </span>our
              <span className="c_2C7D05">Fruitiness</span>
            </h2>
            <p className="my-3 mb-3 fs-18  fw-500 text-justify">
              Our vision is to become the leading provider of fresh fruits,
              recognized for our commitment to quality, sustainability, and
              customer satisfaction. We envision a world where fresh,
              high-quality fruits are easily accessible to everyone,
              contributing to a healthier and happier society.
            </p>
            <p className="my-3 mb-3 fs-18  fw-500 text-justify">
              {" "}
              By continuously innovating and improving our processes, we aim to
              set new standards in the industry. Our vision extends beyond just
              selling fruits. We aspire to create a community of fruit lovers
              who share our passion for freshness, taste, and sustainability.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-12  text-center">
            <p className="fs-20 fw-600">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
              Meet our Fresh Team
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
            </p>
            <h2 className="display-5 fw-700">
              Dedicated <span className="c_CC140D">Team </span>of
              <span className="c_2C7D05"> Success</span>
            </h2>
            <p className="my-3 mb-3 line-h fs-18 fw-500 w-75 m-auto">
              At Fruiting Desert, our dedicated team is the backbone of our
              success. Each member brings a wealth of experience and a passion
              for excellence, ensuring that we deliver the freshest fruits and
              the best service to our customers.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 overflow-hidden py-5">
            <Slider {...Team}>
              <div className="">
                <div className="team_member text-center d-flex justify-content-center bor-lr ">
                  <div className="team-secs">
                    <img src={profile1} className="img-fluid py-4" alt="" />
                    <p className="m-0 fs-24 fw-700">Arul siva</p>
                    <p className="m-0 fs-20 fw-500">Shop Director</p>
                    <div className="d-flex pb-4">
                      <img
                        src={facebook}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={whatapp}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={twitter}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={linkedin}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="team_member text-center d-flex justify-content-center bor-lr ">
                  <div className="team-secs">
                    <img src={profile2} className="img-fluid py-4" alt="" />
                    <p className="m-0 fs-24 fw-700">Priya Mehta</p>
                    <p className="m-0 fs-20 fw-500">Manager</p>
                    <div className="d-flex pb-4">
                      <img
                        src={facebook}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={whatapp}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={twitter}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={linkedin}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="team_member text-center d-flex justify-content-center bor-lr ">
                  <div className="team-secs">
                    <img src={profile3} className="img-fluid py-4" alt="" />
                    <p className="m-0 fs-24 fw-700">Rakesh Kumar</p>
                    <p className="m-0 fs-20 fw-500">Procurementist</p>
                    <div className="d-flex pb-4">
                      <img
                        src={facebook}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={whatapp}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={twitter}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={linkedin}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="team_member text-center d-flex justify-content-center bor-lr ">
                  <div className="team-secs">
                    <img src={profile4} className="img-fluid py-4" alt="" />
                    <p className="m-0 fs-24 fw-700">Sharma</p>
                    <p className="m-0 fs-20 fw-500">Marketing Manager</p>
                    <div className="d-flex pb-4">
                      <img
                        src={facebook}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={whatapp}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={twitter}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                      <img
                        src={linkedin}
                        className="img-fluid mx-2 py-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <Weforbest />
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="fs-20 fw-600">
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
              Have Questions?
              <span>
                <img src={applemini} className="img-fluid" alt="" />
              </span>{" "}
            </p>
            <h2 className="display-5 fw-700">
              Let’s Answer some <span className="c_CC140D">Tasty </span>
              <span className="c_2C7D05">Questions</span>
            </h2>
            <p className="my-3 mb-3 line-h fs-18 fw-500 w-75 m-auto">
              We understand that you may have questions about our products and
              services. To help you, we've compiled a list of the most
              frequently asked questions. If you need further assistance, please
              don't hesitate to contact our customer service team.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6 col-sm-12 col-12 ">
            {faqItems.map((faq, index) => (
              <div key={index} className="color-bored  fd my-4  p-0">
                <div className="question d-flex justify-content-between p-4">
                  <h4 className="fs-24 fw-700">{faq.question}</h4>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="toggle-btn"
                  >
                    {openFAQ[index] ? "-" : "+"}
                  </button>
                </div>
                <div
                  className={`answer px-lg-4 px-3  ${
                    openFAQ[index] ? "answer-open faq_bannerR" : "faq_bannerG"
                  }`}
                >
                  <p className="fs-18 py-3 m-0  fw-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6 col-sm-12 col-12">
            {faqItems2.map((faq1, index) => (
              <div key={index} className="color-bored  fd my-4  p-0">
                <div className="question d-flex justify-content-between p-4">
                  <h4 className="fs-24 fw-700">{faq1.question}</h4>
                  <button
                    onClick={() => toggleFAQ2(index)}
                    className="toggle-btn"
                  >
                    {openFAQ2[index] ? "-" : "+"}
                  </button>
                </div>
                <div
                  className={`answer px-lg-4 px-3  ${
                    openFAQ2[index] ? "answer-open faq_bannerR" : "faq_bannerG"
                  }`}
                >
                  <p className="fs-18 py-3 m-0  fw-600">{faq1.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid  my-5">
        <div className="row ">
          <div className="col-md-12 p-0">
            <div className="callto position-relative">
              <div className="position-absolute enquiry">
                <p className="fs-20 fw-600">For Enquiry</p>
                <h2 className="fs-50 fw-700">+91 - 987 654 321</h2>
                <div className="d-flex pt-3">
                  <Button_gr name="Make a Call" />
                  <Link to="/contact">
                    <Button_border name="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
