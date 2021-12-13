import React, { useState } from "react";

const SingleColor = ({
  rgb,
  weight,
  index,
  hexColor,
  copyHexText,
  copyRGBText,
}) => {
  const bgc = rgb.join(",");
  const rgb_value = `rgb(${bgc})`;
  const hex_value = `#${hexColor}`;

  return (
    <div className="singleColor" key={index}>
      <div className="color" style={{ backgroundColor: `rgb(${bgc})` }}>
        <div className="inPercent">
          <p style={{ color: `${index > 10 ? "#fff" : "#000"}` }}>{weight}%</p>
        </div>
        <div className="copyValues">
          <button className="hexValue" onClick={() => copyHexText(hex_value)}>
            <p>Copy HEX Value {hex_value}</p>
          </button>

          <button className="rgbValue" onClick={() => copyRGBText(rgb_value)}>
            <p>Copy RGB Value {rgb_value}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleColor;
