import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import data from "../data/datamovies.json";

function Content(props) {
  useEffect(() => {
    // console.log(data);
  }, []);
  return (
    <div className="container">
      <div className="content_row">
        {/* title */}
        <h2 className="mt-4">{props.category}</h2>

        {/* cards horizontal */}
        <div className="cards_row">
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data?.map((item, id) => {
              return (
                <SwiperSlide>
                  <Link to="/moviesdetails" className="card_item">
                    <img
                      className="img_size"
                      // src={require("../../Images/default.png")}
                      src={item.image}
                      alt="img_size"
                    />
                    <h5 className="mt-3">{item.title}</h5>
                    <p className="fw-lighter">{item.year}</p>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Content;
