import React, { useState, useEffect } from "react";

import SingleColor from "./SingleColor";
import Values from "values.js";

function Content() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#7209b7").all(10));
  const [showMsg, setShowMsg] = useState(false);
  const [msgText, setMsgText] = useState("");

  const copyHexText = (hex) => {
    navigator.clipboard.writeText(hex);
    setShowMsg(true);
    setMsgText("HEX");
  };

  const copyRGBText = (rgb) => {
    navigator.clipboard.writeText(rgb);
    setShowMsg(true);
    setMsgText("RGB");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMsg(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showMsg]);

  return (
    <>
      <div
        className="msg-container"
        style={{ top: `${showMsg ? "0%" : "-100%"}` }}
      >
        <div className="msg">
          <p>✓ {msgText} value copied !!</p>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <div className="logo">
            <h1>Color Shades Generator</h1>
          </div>
          <div className="input">
            <form className="form" onSubmit={submitHandler}>
              <input
                type="text"
                target={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                placeholder="#7209b7"
              />

              <button type="submit" className="btn">
                generate
              </button>
            </form>
          </div>
        </div>

        <div className="sColor">
          {list.map((color, index) => {
            return (
              <SingleColor
                {...color}
                key={index}
                hexColor={color.hex}
                index={index}
                copyHexText={copyHexText}
                copyRGBText={copyRGBText}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Content;
