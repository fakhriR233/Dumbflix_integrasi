import React from "react";
// import Navbar from "../Home/TopNavbars";
import TopNavbar from "../Utility/TopNavAdmin";
import ContentDetailAdmin from "./ContentDetailAdmin";

function DetailAdminPage() {
  return (
    <div className="app">
      <TopNavbar />
      <ContentDetailAdmin />
    </div>
  );
}

export default DetailAdminPage;
