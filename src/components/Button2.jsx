import React from "react";

const Button_gr = ({ name }) => {
  return (
    <div>
      <button className="gradient btn me-3 bordered text-white px-4 py-2 fw-600 fs-18">
        {name}
      </button>
    </div>
  );
};

export default Button_gr;
