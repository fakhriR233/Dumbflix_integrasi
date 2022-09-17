import React from "react";
import { useQuery, useMutation } from "react-query";

import TopNavbar from "../Utility/TopNavbar";
import Banner from "./Banner";
import Content from "./Content";
import ContentTV from "./ContentTV";
import data1 from "../data/datatvshows.json";

function HomeScreen() {
  // let api = API();

  const title = "Home";
  document.title = "DumbFlix | " + title;
  // Fetching film/tvshow data from database

  return (
    <div className="app">
      <TopNavbar />
      <Banner data={data1} />
      <ContentTV category="TV Series" />
      <Content category="Movies" />
    </div>
  );
}

export default HomeScreen;
