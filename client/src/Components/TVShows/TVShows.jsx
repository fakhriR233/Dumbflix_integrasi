import React, { Component } from "react";
// import Content from "../Home/Content";
import TopNavbar from "../Utility/TopNavbar";
import BannerTv from "./BannerTv";
import data from "../data/datatvshows.json";
import ContentTV from "../Home/ContentTV";
import CardTVShows from "./CardTVShows";

export default class TVShows extends Component {
  render() {
    return (
      <div className="app">
        <div style={{ maxHeight: "100%" }}>
          <TopNavbar />
          <BannerTv data={data} />
          {/* <ContentTV category="TV Series" data={data} /> */}
          <CardTVShows category="TV Series" />
        </div>
      </div>
    );
  }
}
