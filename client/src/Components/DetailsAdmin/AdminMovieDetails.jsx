import React from "react";
import TopNavbarAdmin from "../Utility/TopNavAdmin";
import AdminMovieContentDetails from "./AdminMovieContentDetails";
// import Navbar from "../Home/TopNavbars";
// import TopNavbar from "../Utility/TopNavbar";
// import ContentDetails from "./ContentDetails";

function AdminMovieDetails() {
  return (
    <div className="app">
      <TopNavbarAdmin />
      <AdminMovieContentDetails />
    </div>
  );
}

export default AdminMovieDetails;
