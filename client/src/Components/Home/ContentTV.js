import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import data from "../data/datatvshows.json";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import { Col } from "react-bootstrap";

function ContentTV(props) {
  const [allFilm, setAllFilm] = useState([]);

  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    //console.log(response.data.data);
    return response.data.data;
  });

  useEffect(() => {
    setAllFilm(
      films
        ?.filter((item) => item?.category_id === 2)
        .map(
          ({
            id,
            category,
            category_id,
            description,
            thumbnailfilm,
            title,
            year,
          }) => ({
            id,
            category,
            category_id,
            description,
            thumbnailfilm,
            title,
            year,
          })
        )
    );

    //console.log(allFilm);
  }, [films]);

  return (
    <div className="container">
      <div className="content_row">
        {/* title */}
        <h2 className="mt-4">{props.category}</h2>

        {/* cards horizontal */}
        {allFilm?.length !== 0 && allFilm?.length !== [] ? (
          <>
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
                {allFilm?.map((item, id) => {
                  return (
                    <SwiperSlide>
                      <Link
                        to={"/moviesdetails/" + item?.id}
                        className="card_item"
                      >
                        <img
                          className="img_size_tv_home"
                          // src={require("../../Images/default.png")}
                          src={item?.thumbnailfilm}
                          alt="img_size"
                        />
                        <h5 className="mt-3">{item?.title}</h5>
                        <p className="fw-lighter">{item?.year}</p>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </>
        ) : (
          <>
            <Col>
              <div className="text-center pt-5">
                {/* <img
                  src={imgEmpty}
                  className="img-fluid"
                  style={{ width: "40%" }}
                  alt="None"
                /> */}
                <div className="mt-3" style={{ Color: "white" }}>
                  No Films Yet, Our Devs might be sleeping
                </div>
              </div>
            </Col>
          </>
        )}
      </div>
    </div>
  );
}

export default ContentTV;
