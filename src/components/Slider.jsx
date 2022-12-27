import { useState } from "react";
const Slider = ({ ...props }) => {
  return (
    <>
      <input
        type="range"
        {...props}
        className="form-range appearance-none rounded-full h-3 slider-thumb range-lg duration-500 outline-none"
        style={{
          backgroundColor: "hsl(174, 77%, 80%)",
        }}
      />
    </>
  );
};
export default Slider;
