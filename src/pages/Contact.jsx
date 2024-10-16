import React from "react";
import { Link } from "react-router-dom";
import applemini from "../images/home/applemini.png";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaPenAlt } from "react-icons/fa";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import emailjs from "emailjs-com";
const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    saveInfo: false,
    specific: "",
  });

  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s.]+$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    const allSameDigit = /^(\d)\1{9}$/;
    return regex.test(phone) && !allSameDigit.test(phone);
  };
  const validateSpecific = (specific) => {
    const regex = /^[a-zA-Z\s.]+$/;
    return regex.test(specific);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateName(formData.name))
      newErrors.name = "Name should only contain letters, spaces, and dots.";
    if (!validateEmail(formData.email))
      newErrors.email =
        "Email should be in lowercase and follow the format: example@example.com";
    if (!validatePhone(formData.phone))
      newErrors.phone =
        "Phone number should be 10 digits and not all the same digit.";
    if (!validateSpecific(formData.specific))
      newErrors.specific =
        "Plese type any fruit.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      emailjs
        .send(
          "service_zzefcan",
          "template_9j1t11i",
          formData,
          "DPaxvpxbEUxBsz-N2"
        )
        .then(
          (response) => {
            console.log("Email sent:", response.status, response.text);
          },
          (error) => {
            console.error("Error sending email:", error);
          }
        );

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        saveInfo: false,
        specific: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXEI_mnb3TbOPsl11svWFd8z2OeOkFqgs",
  });

  const [markerLocation] = useState({
    lat: 11.754591266935144,
    lng: 79.78402421372962,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div className="sectionone position-relative ">
        <div className="banner-img-cont"></div>
        <div className="position-absolute breadcrumbs">
          <p className="fs-24 fw-700 m-0 pb-2 ">
            <Link to="/" className="text-dark">
              {" "}
              Home
            </Link>{" "}
            &gt; <span className="c_CC140D"> Contact</span>
          </p>
          <h1 className="fs-50 fw-700">Contact</h1>
        </div>
      </div>
      <div className="container-fluid  ">
        <div className="leaf1">
          <div className="row ">
            <div className="col-lg-12  text-center">
              <p className="fs-20 fw-600">
                <span>
                  <img src={applemini} className="img-fluid" alt="" />
                </span>{" "}
                Reach Out to Us
                <span>
                  <img src={applemini} className="img-fluid" alt="" />
                </span>{" "}
              </p>
              <h2 className="display-5 fw-700">
                Contact 
                <span className="c_CC140D">Fruiting </span>
                <span className="c_2C7D05"> Desert</span>
              </h2>
              <p className="my-3 mb-3 line-h fs-18 fw-500 w-75 m-auto">
                We value your feedback and inquiries. Whether you have a
                question about our products, need assistance with our Products,
                or simply want to share your thoughts, we’re here to help.
              </p>
            </div>
          </div>
          <div className="row mx-lg-5 mx-md-3 mx-2 my-lg-5 my-2">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="d-lg-flex d-block p-4 rl-boder my-4">
                <div className="me-4">
                  <IoCall className="callicon fs-50" />
                </div>
                <div className="">
                  <p className="fw-500 fs-20 m-0">Contact No</p>
                  <p>+91 - 987654321, +91 - 896745231</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="d-lg-flex d-block p-4 rl-boder my-4">
                <div className="me-4">
                  <FaLocationDot className="callicon fs-50" />
                </div>
                <div className="">
                  <p className="fw-500 fs-20 m-0">Shop Address</p>
                  <p>123 Fruit Lane, Fruit City, India</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="d-lg-flex d-block p-4 rl-boder my-4">
                <div className="me-4">
                  <IoMdMail className="callicon fs-50" />
                </div>
                <div className="">
                  <p className="fw-500 fs-20 m-0">Email I’d</p>
                  <p>support@fruitingdesert.com</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 m-auto">
              <div className="d-lg-flex d-block p-4 rl-boder my-2">
                <div className="me-4">
                  <IoTime className="callicon fs-50" />
                </div>
                <div className="">
                  <p className="fw-500 fs-20 m-0">Working Hours</p>
                  <p>Monday to Saturday : 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row leaf2">
          <div className="conta">
            <div className="p-lg-5 p-lg-3 p-3 my-lg-5 my-3 w-75 m-auto bor-lr Quote">
              <p className="fw-700 fs-50 text-center">
                Get <span className="c_CC140D"> a </span>{" "}
                <span className="c_2C7D05">Quote</span>
              </p>
              <p className="fw-500 fs-20 text-center">
                Fill out the form below to reach out to us. We're here to help
                with any questions, feedback, or inquiries you may have.
              </p>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="d-block d-md-flex">
                      <div className="position-relative me-2 w-100 mb-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-100 form-style ${
                            errors.name && "is-invalid"
                          }`}
                        />
                        <IoPerson className="position-absolute formicon text-success" />
                        {errors.name && (
                          <div className="text-danger">{errors.name}</div>
                        )}
                      </div>
                      <div className="position-relative w-100 mb-4">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-100 form-style ${
                            errors.email && "is-invalid"
                          }`}
                        />
                        <IoCall className="position-absolute formicon text-success" />
                        {errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="d-block d-md-flex">
                      <div className="me-2 w-100 mb-md-4 mb-2 position-relative">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-100 form-style ${
                            errors.phone && "is-invalid"
                          }`}
                        />
                        <IoCall className="position-absolute formicon text-success" />
                        {errors.phone && (
                          <p className="text-danger fw-400  w-100">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div className="position-relative w-100 mb-4">
                        <input
                          type="text"
                          name="specific"
                          placeholder="On Specific Fruit?"
                          value={formData.specific}
                          onChange={handleChange}
                          className="w-100 form-style"
                        />
                        <GiFruitBowl className="position-absolute formicon text-success" />
                        {errors.specific && (
                          <p className="text-danger fw-400  w-100">
                            {errors.specific}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="position-relative mb-4">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="What do think of our Product?..."
                          value={formData.message}
                          onChange={handleChange}
                          className="p-3 form-style w-100"
                        ></textarea>
                        <FaPenAlt className="position-absolute formicon text-success" />
                      </div>
                      <div className="d-flex align-items-center text-success fs-20 fw-600">
                        <input
                          type="checkbox"
                          name="saveInfo"
                          className="form-check-box"
                          id="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleChange}
                        />
                        <p className="m-0 ms-3">
                          Save my name, email, in this website for the next time
                          I fill.
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="btn w-100 py-2 d-block mt-5 fw-700 fs-20 gradient text-white"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="m-lg-5 m-3">
                <GoogleMap
                  mapContainerStyle={{
                    borderRadius: "20px",
                    height: "400px",
                    width: "100%",
                  }}
                  zoom={13}
                  center={markerLocation}
                  options={{
                    gestureHandling: "greedy",
                    disableDefaultUI: true,
                  }}
                >
                  <Marker position={markerLocation} />
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
