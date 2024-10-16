import React from "react";
import { Link, NavLink } from "react-router-dom";
import log from "../../images/home/logo.png";
import { FaSearch } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-border nav-boxhadow px-4 ">
      <div className="container-fluid py-2 px-1">
        <Link className="navbar-brand" to="/">
          <img src={log} alt="Logo" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto fs-18">
            <li className="nav-item mx-lg-4 mx-md-1 mx-0 fw-600">
              <NavLink className={({ isActive }) => `nav-link fw-600 ${isActive ? "c_2C7D05 fw-700" : "text-black fw-600" }`} to="/" end>Home
              </NavLink>
            </li>
            <li className="nav-item mx-lg-4 mx-md-1 mx-0">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fw-600 ${
                    isActive ? "c_2C7D05 fw-700" : "text-black fw-600"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-lg-4 mx-md-1 mx-0">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fw-600 ${
                    isActive ? "c_2C7D05 fw-700" : "text-black fw-600"
                  }`
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-lg-4 mx-md-1 mx-0">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fw-600 ${
                    isActive ? "c_2C7D05 fw-700" : "text-black"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex my-2 ms-auto position-relative">
            <button
              className="btn fw-700 gradient text-white me-sm-2 w-75 p-1"
              type="submit"
            >
              Get a Quote
            </button>
            <input
              className="form-control gradient-border mx-1 rounded-3"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="position-absolute search-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
