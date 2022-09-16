import React from "react";
// import TopNavbar from "../Utility/TopNavbar";
import AddListButton from "./AddListButton";
// import Content from "../Home/Content";
// import ContentTV from "../Home/ContentTV";
import ContentMoviesAdmin from "../AdminHome/ContentMovies";
import ContentTVAdmin from "../AdminHome/ContentTVAdmin";
import TopNavbarAdmin from "../Utility/TopNavAdmin";

function AddListPage() {
  return (
    <div className="app">
      <TopNavbarAdmin />
      <AddListButton />
      <ContentTVAdmin category="TV Series" />
      <ContentMoviesAdmin category="Movies" />
    </div>
  );
}

export default AddListPage;
