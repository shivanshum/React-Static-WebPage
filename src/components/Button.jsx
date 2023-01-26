import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-3 px-6 mb-20 ml-10 font-poppins font-bold text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Explore More
  </button>
);

export default Button;