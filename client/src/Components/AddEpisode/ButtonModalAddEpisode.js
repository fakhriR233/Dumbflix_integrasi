import React from "react";
import { useNavigate } from "react-router-dom";
import AddEpisode from "./AddEpisode";

function ButtonModalAddEpisode(props) {
  const [modalShow, setModalShow] = React.useState(false);

  let Navigate = useNavigate();

  function addFilmHandler() {
    Navigate("/addmovies");
  }

  return (
    <>
      <button className="btn btn-danger w-100" onClick={addFilmHandler}>
        Add Film
      </button>

      <AddEpisode show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ButtonModalAddEpisode;
