import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { FaIdeal } from "react-icons/fa";
import BarChat from "./BarChat";
import Geochat from "./Geochat";
import PieChart from "./PieChart.jsx";
import { Content } from "antd/es/layout/layout.js";
const MenuItem = () => {
  return (
    <div>
      <div className="container-fluid ">
        <Content
          className="content"
          style={{
            margin: "1px 16px",
            //   background: colorBgContainer,
            //   borderRadius: borderRadiusLG,
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-3 ">
              <div className="card text-white my-3  ">
                <FaBasketShopping className="fs-30 mx-3 mt-3 text-dark" />
                <div className="card-body text-dark ">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text">13, 647</p>
                </div>
              </div>
              <div className="card text-white my-3  ">
                <FaBasketShopping className="fs-30 mx-3 mt-3 text-dark" />
                <div className="card-body text-dark ">
                  <h5 className="card-title">New Leads</h5>
                  <p className="card-text">9, 526</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-white my-3   ">
                <FaIdeal className="fs-30 mx-3 mt-3 text-dark" />
                <div className="card-body text-dark ">
                  <h5 className="card-title">Deals</h5>
                  <p className="card-text">976</p>
                </div>
              </div>
              <div className="card text-white my-3   ">
                <CiDollar className="fs-30 mx-3 mt-3 text-dark" />
                <div className="card-body text-dark ">
                  <h5 className="card-title">Booked Revenue</h5>
                  <p className="card-text">$123.6k</p>
                </div>
              </div>
            </div>

            <div className="col-6 ">
              <BarChat />
            </div>
          </div>
        </Content>
      </div>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-md-6">
            <Geochat />
          </div>
          <div className="col-md-6">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
