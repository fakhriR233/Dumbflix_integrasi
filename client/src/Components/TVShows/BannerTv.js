import React from "react";
// import { useEffect } from "react";

function BannerTv(props) {
  // useEffect(() => {
  //   console.log(props.data);
  // }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${props.data[0].image})`,
      }}
    >
      <div className="container">
        <div className="banner_content">
          <h1 className="banner_title">{props.data[0].title}</h1>
          <p className="banner_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            faucibus orci. Sed at sapien ac nulla mattis luctus id et justo.
            Mauris convallis venenatis augue eget vestibulum. Donec cursus elit
            velit, ac porttitor neque volutpat maximus. Nam et tellus tempor,
            ultrices arcu eget, elementum urna. Phasellus malesuada dui nec.
          </p>
          <div>
            <span className="me-3 fw-lighter">{props.data[0].year}</span>
            <button className="btn btn-outline-light btn-sm">
              {props.data[0].type}
            </button>
          </div>
          <button className="btn btn-danger btn-md mt-3 banner_button_play">
            WATCH NOW !
          </button>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default BannerTv;
