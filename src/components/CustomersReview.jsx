import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Rate, message as antdMessage } from "antd";
import { MdOutlineDateRange } from "react-icons/md";
import collectionfruit from "../images/home/collection-fruit.png";
import { IoPerson, IoCall } from "react-icons/io5";
import { FaPenAlt } from "react-icons/fa";
import axios from "axios";
const CustomersReview = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    rating: "",
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        console.log(response.data);
        setReviews(response.data);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      }
    };

    fetchReviews();
  }, []);

  const generateLetterImage = (letter) => {
    const canvas = document.createElement("canvas");
    const size = 100;
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#4CAF50"; // Background color
    ctx.fillRect(0, 0, size, size); // Draw background

    ctx.font = "bold 60px Arial"; // Set font
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff"; // Text color
    ctx.fillText(letter.toUpperCase(), size / 2, size / 2); // Draw letter

    return canvas.toDataURL("image/png"); // Return image URL
  };

  const settings1 = {
    dots: false,
    infinite: reviews.length > 1,
    speed: 500,
    slidesToShow: Math.min(reviews.length, 3),
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(reviews.length, 2),
          slidesToScroll: 1,
          infinite: reviews.length > 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const validateName = (value) => {
    const nameRegex = /^[a-zA-Z\s.]+$/;
    if (!nameRegex.test(value)) {
      return "Name can only contain letters, spaces";
    }
    return "";
  };

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(value)) {
      return "Please nter a valied Phone number";
    }
    return "";
  };

  const handleRateChange = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const ratingError = rating === 0 ? "Please select a rating." : "";

    if (nameError || phoneError || ratingError) {
      setErrors({
        name: nameError,
        phone: phoneError,
        rating: ratingError,
      });
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/submit-review",
          { name, phone, rating, message, saveInfo }
        );
        if (response.status === 201) {
          console.log("Review submitted successfully");
          const newReview = {
            name,
            phone,
            rating,
            message,
            saveInfo,
            date: new Date(),
          };
          setReviews((prevReviews) => [newReview, ...prevReviews]);
          setName("");
          setPhone("");
          setRating(0);
          setMessage("");
          antdMessage.success("Review submitted successfully!");
        }
      } catch (error) {
        console.error("Failed to submit review", error);
      }
    }
  };

  return (
    <>
      <div className="container-fluid leaf2">
        <div className="row mx-lg-5 mx-3">
          <div className="col-12">
            <p className="my-5 fs-24 fw-700">Customers Product Reviews</p>
            <Slider {...settings1}>
              {reviews.map((review, index) => (
                <div key={index}>
                  <div className="d-block d-lg-flex card-shadow-review py-5 px-3 mx-2 my-2 position-relative">
                    <div className="d-flex justify-content-center align-items-center px-2 reviewcard">
                      <img
                        src={generateLetterImage(review.name.charAt(0))}
                        className="img-fluid"
                        alt="ll"
                        style={{ borderRadius: "50%", width: 100, height: 100 }}
                      />
                    </div>
                    <div className="review-content">
                      <p className="my-2 fw-700 fs-24">{review.name}</p>
                      <p className="my-2 fw-500 fs-18">
                        <MdOutlineDateRange className="text-danger me-2" />
                        {review.date
                          ? new Date(review.date).toLocaleDateString()
                          : "Just now"}
                      </p>
                      <p className="my-2 fs-18 review-message">{review.message}</p>
                      <p className="my-2 fw-600 position-absolute top-0 end-0 p-3">
                        <Rate defaultValue={review.rating} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>  

        <div className="row mx-lg-5 mx-3 my-5 align-items-center justify-content-between">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12  col-12 ">
            <p className="fw-700 fs-20">We Value Your Feedback</p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="d-block d-md-flex">
                  <div className="position-relative me-2 w-100 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-100  form-style ${
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
                      type="tel"
                      placeholder="Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-100  form-style ${
                        errors.phone && "is-invalid"
                      }`}
                    />
                    <IoCall className="position-absolute formicon text-success" />
                    {errors.phone && (
                      <div className="text-danger">{errors.phone}</div>
                    )}
                  </div>
                </div>

                <div className="d-block d-md-flex">
                  <div className="me-2 w-100  mb-md-4 mb-2">
                    <div className="form-style  d-flex justify-content-between">
                      <span className="fw-700 fs-18 text-muted">Rate </span>
                      <Rate onChange={handleRateChange} value={rating} />
                    </div>
                    {errors.rating && (
                      <p className="text-danger fw-400 fs-18  w-100">
                        {errors.rating}
                      </p>
                    )}
                  </div>
                  <p className="text-danger fw-700 fs-20 pt-2 my-2 w-100">
                    Tap the Stars to select
                  </p>
                </div>

                <div className="w-100">
                  <div className="position-relative mb-4">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="What do think of our Product?..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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
                      checked={saveInfo}
                      onChange={(e) => setSaveInfo(e.target.checked)}
                    />
                    <p className="m-0 ms-3">
                      Save my name, email, in this website for the next time I
                      fill.
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
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="my-4 position-relative text-white gradient rounded-4">
              <div className="text-center ">
                <p className="pt-3 fw-600 fs-20 m-0">Weeks Deal</p>
                <p className="fw-700 pt-3 m-0 fs-30">Get our Fruit Combo</p>
                <p className="fs-50 fw-700 m-0">30% OFF</p>
              </div>
              <div className="d-flex justify-content-center">
                <img src={collectionfruit} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersReview;
