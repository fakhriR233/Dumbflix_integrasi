import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import ButtonModalAddEpisode from "../AddEpisode/ButtonModalAddEpisode";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../config/api";

function ContentDetailAdmin() {
  let { id } = useParams();
  const [allEpisode, setAllEpisode] = useState([]);

  //call get all episode API
  let { data: episodes } = useQuery("episodesCache", async () => {
    const response = await API.get("/episodes");
    // console.log(response.data.film_id);
    return response.data.data;
  });

  let { data: film } = useQuery("filmCache", async () => {
    const response = await API.get("/film/" + id);
    // console.log(response.data.film_id);
    return response.data.data;
  });

  useEffect(() => {
    setAllEpisode(
      episodes
        ?.filter((item) => item?.film_id == id)
        .map(({ id, title, thumbnailEpisode, linkFilm, film_id, film }) => ({
          id,
          title,
          thumbnailEpisode,
          linkFilm,
          film_id,
          film,
        }))
    );

    //console.log(allFilm);
  }, [episodes]);

  console.log(allEpisode);

  return (
    <div className="container">
      <div class="ratio ratio-16x9 trailer_movies">
        <iframe
          src="https://www.youtube.com/embed/ndl1W4ltcmg"
          title="The Witcher Season 1"
          allowfullscreen
        ></iframe>
      </div>

      <div class="row my-4 d-flex justify-content-end">
        <div className="col-md-3 w-30">
          <ButtonModalAddEpisode />
        </div>
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
          <h2>The Witcher Season 1</h2>
          <div>
            <span className="me-3 fw-lighter">2019</span>
            <button className="btn btn-outline-light btn-sm">TV Series</button>
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
                <p className="text-center mt-2">Movies : Ep 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Movies : Ep 2</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ContentDetailAdmin;
