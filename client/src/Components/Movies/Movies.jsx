import React from "react";
import TopNavbar from "../Utility/TopNavbar";
import data from "../data/datamovies.json";
import BannerMovies from "./BannerMovies";
// import ContentTV from "../Home/ContentTV";
import Content from "../Home/Content";
import CardMovies from "./CardMovies";

function Movies() {
  //console.log(data);
  return (
    <div className="app">
      <TopNavbar />
      <BannerMovies data={data} />
      {/* <Content category="Movies" data={data} /> */}
      <CardMovies category="Movies" />
    </div>
  );
}

export default Movies;
