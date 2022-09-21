import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { API } from "../../config/api";
// import data from "../data/datamovies.json";

function Banner(props) {
  const [currentBG, setCurrentBG] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentID, setCurrentID] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentDesc, setCurrentDesc] = useState(null);

  // console.log(props);

  let { data: movies } = useQuery("moviesCache", async () => {
    const response = await API.get("/films");
    //console.log(response.data.data);
    return response.data.data;
  });

  // window.location.reload(false);

  // useEffect(() => {
  //   window.location.reload(false);
  // }, []);

  useEffect(() => {
    setCurrentBG(props.data[0].image);
    setCurrentTitle(props.data[0].title);
    setCurrentYear(props.data[0].year);
    setCurrentCategory(props.data[0].type);
    setCurrentDesc(props.data[0].description);
    const intervalId = setInterval(() => {
      let x = Math.floor(Math.random() * movies?.length);
      setCurrentBG(movies[x]?.thumbnailfilm);
      setCurrentTitle(movies[x]?.title);
      setCurrentID(movies[x]?.id);
      setCurrentYear(movies[x]?.year);
      setCurrentCategory(movies[x]?.category?.name);
      setCurrentDesc(movies[x]?.description);
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
          <p className="banner_desc">{currentDesc}</p>
          <div>
            <span className="me-3 fw-lighter">{currentYear}</span>
            <button className="btn btn-outline-light btn-sm">
              {currentCategory}
            </button>
          </div>
          <Link to={"/moviesdetails/" + currentID}>
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
