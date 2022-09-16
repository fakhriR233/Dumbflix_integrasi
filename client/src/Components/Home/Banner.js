import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data/datamovies.json";

function Banner(props) {
  const [currentBG, setCurrentBG] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let x = Math.floor(Math.random() * props.data.length);
      setCurrentBG(props.data[x].image);
      setCurrentTitle(props.data[x].title);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // console.log(data);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${currentBG})`,
      }}
    >
      <div className="container">
        <div className="banner_content">
          <h1 className="banner_title">{currentTitle}</h1>
          <p className="banner_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            faucibus orci. Sed at sapien ac nulla mattis luctus id et justo.
            Mauris convallis venenatis augue eget vestibulum. Donec cursus elit
            velit, ac porttitor neque volutpat maximus. Nam et tellus tempor,
            ultrices arcu eget, elementum urna. Phasellus malesuada dui nec.
          </p>
          <div>
            <span className="me-3 fw-lighter">2012</span>
            <button className="btn btn-outline-light btn-sm">Movies</button>
          </div>
          <Link to="/moviesdetails">
            <button className="btn btn-danger btn-md mt-3 banner_button_play">
              WATCH NOW !
            </button>
          </Link>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
