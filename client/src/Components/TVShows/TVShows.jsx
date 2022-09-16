import React, { Component } from "react";
// import Content from "../Home/Content";
import TopNavbar from "../Utility/TopNavbar";
import BannerTv from "./BannerTv";
import data from "../data/datatvshows.json";
import ContentTV from "../Home/ContentTV";

export default class TVShows extends Component {
  render() {
    return (
      <div className="app">
        <TopNavbar />
        <BannerTv data={data} />
        <ContentTV category="TV Series" data={data} />
      </div>
    );
  }
}
