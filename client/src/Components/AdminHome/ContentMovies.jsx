import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import data from "../data/datamovies.json";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { Col } from "react-bootstrap";

function ContentMoviesAdmin(props) {
  const [allMovie, setAllMovie] = useState([]);

  let { data: movies } = useQuery("moviesCache", async () => {
    const response = await API.get("/films");
    console.log(response.data.data);
    return response.data.data;
  });

  useEffect(() => {
    setAllMovie(
      movies
        ?.filter((item) => item?.category_id === 1)
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
  }, [movies]);

  return (
    <div className="container">
      <div className="content_row">
        {/* title */}
        <h2 className="mt-4">{props.category}</h2>

        {/* cards horizontal */}
        {allMovie?.length !== 0 && allMovie?.length !== [] ? (
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
                {allMovie?.map((item, id) => {
                  return (
                    <SwiperSlide>
                      <Link
                        to={"/adminmoviedetails/" + item?.id}
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
                  No Films Yet, Add a New One Please.
                </div>
              </div>
            </Col>
          </>
        )}
      </div>
    </div>
  );
}

export default ContentMoviesAdmin;
