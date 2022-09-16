import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function AdminMovieContentDetails() {
  return (
    <div className="container">
      <div class="ratio ratio-16x9 trailer_movies">
        <iframe
          src="https://www.youtube.com/embed/4CbLXeGSDxg"
          title="The Lion King"
          allowfullscreen
          className="embed-responsive"
        ></iframe>
      </div>

      <div className="row">
        <div className="col-md-3 mb-3">
          <img
            className="img"
            src={require("../../Images/default.png")}
            alt="default.img"
          />
        </div>

        <div className="col-md-3">
          <h2>The Lion King</h2>
          <div>
            <span className="me-3 fw-lighter">2019</span>
            <button className="btn btn-outline-light btn-sm">Movies</button>
          </div>
          <p className="detail_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            faucibus orci. Sed at sapien ac nulla mattis luctus id et justo.
            Mauris convallis venenatis augue eget vestibulum. Donec cursus elit
            velit, ac porttitor neque volutpat maximus. Nam et tellus tempor,
            ultrices arcu eget, elementum urna. Phasellus malesuada dui nec.
          </p>
        </div>

        <div className="col-md-6">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Playing Now!</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default AdminMovieContentDetails;
