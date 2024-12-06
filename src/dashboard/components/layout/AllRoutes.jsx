import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuItem from "../pages/MenuItem";
import ProductList from "../pages/product/ProductList";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MenuItem/>} />
            <Route path="/product" element={<ProductList />} />        
        </Routes>
    );
};

export default AllRoutes;
    