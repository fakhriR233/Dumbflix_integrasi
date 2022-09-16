import React, { Component } from "react";
// import { Row,Col,Button } from 'react-bootstrap'
import TopNavbar from "../Utility/TopNavbar";
import CardProfil from "./CardProfil";
// import {IoIosContact,IoIosMail, IoIosMale,IoMdCall} from 'react-icons/io'
// import {IoLocationSharp} from 'react-icons/io5'
// import VIPImage from '../../Images/vipimage.png'
// import FotoProfile from '../../Images/profil.jpeg'

export class Profil extends Component {
  render() {
    return (
      <>
        <TopNavbar />
        <div
          style={{
            height: "92vh",
            paddingTop: "3.5rem",
            backgroundColor: "#2f2f2f",
          }}
        >
          <CardProfil />
        </div>
      </>
    );
  }
}

export default Profil;
