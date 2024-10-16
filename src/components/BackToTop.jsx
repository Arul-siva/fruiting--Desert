import React from "react";
import { useState, useEffect } from "react";
import backtotop from "../images/backtotop.png";
const BackToTop = () => {
  const [BackToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div>
      {BackToTop && (
        <img
          src={backtotop}
          className="backtotop"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          alt="v"
        />
      )}
    </div>
  );
};

export default BackToTop;
