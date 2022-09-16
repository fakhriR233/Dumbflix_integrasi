import React from "react";
import jumboImage from "../../Images/1484260.jpg";

function CarouselMovies() {
  return (
    <div
      className="jumbotron"
      style={{ backgroundImage: `url(${jumboImage})` }}
    >
      <div className="container">
        <h1 className="display-3">Judul Film</h1>
        <p className="lead mt-3">Deskripsi Film</p>
        <div className="my-3">
          <span>2019</span>
          <button className="btn btn-outline-light btn-sm mx-3">
            Movies / TV Series
          </button>
        </div>
        <a className="btn btn-danger btn-lg mb-3" href="/" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default CarouselMovies;
