import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import ButtonAddEpisodeAdmin from "./ModalAddEpisode";
import AddEpisode from "../AddEpisode/AddEpisode";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../config/api";

function AdminTVContentDetails() {
  const [modalShow, setModalShow] = React.useState(false);

  function showModal() {
    setModalShow(true);
  }

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
      <div class="ratio ratio-16x9 trailer_movies mb-3 ">
        <iframe
          src="https://www.youtube.com/embed/6Bdb1V0Io_g"
          title="One Punch Man"
          allowfullscreen
        ></iframe>
      </div>

      {/* <div className="row">
       
      </div> */}

      <div className="row">
        <div className="col-md-2 mb-3">
          <img className="img" src={film?.thumbnailfilm} alt="default.img" />
        </div>

        <div className="col-md-5">
          <h2>{film?.title}</h2>
          <div>
            <span className="me-3 fw-lighter">{film?.year}</span>
            <button className="btn btn-outline-light btn-sm">
              {film?.category?.name}
            </button>
          </div>
          <p className="detail_desc">{film?.description}</p>
        </div>

        <div className="col-md-5">
          <div className="mb-4 me-4 pe-3 text-end">
            <button className="btn btn-danger" onClick={showModal}>
              Add Episode
            </button>
            <AddEpisode show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Episode 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Episode 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-item active">
                <img
                  src={require("../../Images/default.png")}
                  className="d-block w-100 img"
                  alt="..."
                />
                <p className="text-center mt-2">Episode 3</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default AdminTVContentDetails;
