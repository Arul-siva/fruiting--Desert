import React from "react";

export const Button_border = ({ name }) => {
  return (
    <div>
      <button className="gradient-border btn text-black px-4 py-2 fw-600 fs-18">
        {name}
      </button>
    </div>
  );
};
export default Button_border;
