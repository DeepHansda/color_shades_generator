import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="header">
        <div className="logo">
        <Link to="content">
            
          <h1>Color Shades Generator</h1>
          </Link>
        </div>
      </div>
      <div className="landing">
        <div className="landing-img">
          <div className="img">
          <Link to="content">
            <img
              src="https://res.cloudinary.com/manjiro/image/upload/v1639409888/5e4699ca314e56ae3a14659e_color-names-p-1080_w5xds9.png"
              alt="img"
            />
            </Link>
          </div>
        </div>
        <div className="landing-text">
          <div className="text-header">
            <h1>color shades generator</h1>
          </div>
          <div className="text-para">
            <p>
              generate shades and tint colors , just entering color name , hex
              values or rgb values.
            </p>
          </div>
          <div className="generator-button">
            <Link to="content">
              <button className="gen-btn">generate</button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
