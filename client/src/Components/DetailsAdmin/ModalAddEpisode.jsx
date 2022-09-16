import React from "react";
import { useNavigate } from "react-router-dom";
import AddEpisode from "../../Components/AddEpisode/AddEpisode";

function ModalAddEpisode(props) {
  const [modalShow, setModalShow] = React.useState(false);

  function showModal() {
    setModalShow(true);
  }

  return (
    <div className="">
      <button className="btn btn-danger w-100" onClick={showModal}>
        Add Episode
      </button>

      <AddEpisode show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default ModalAddEpisode;
