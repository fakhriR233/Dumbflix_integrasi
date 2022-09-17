import React, { Component } from "react";
import { useQuery } from "react-query";
import { API } from "../../config/api";
// import { Row,Col,Button } from 'react-bootstrap'
import TopNavbar from "../Utility/TopNavbar";
import CardProfil from "./CardProfil";
// import {IoIosContact,IoIosMail, IoIosMale,IoMdCall} from 'react-icons/io'
// import {IoLocationSharp} from 'react-icons/io5'
// import VIPImage from '../../Images/vipimage.png'
// import FotoProfile from '../../Images/profil.jpeg'

function Profil() {
  let { data: profile, refetch: profileRefetch } = useQuery(
    "profileCache",
    async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };
      const response = await API.get("/check-auth", config);
      return response.data.data;
    }
  );
  console.log(profile);
  return (
    <>
      <TopNavbar />
      <div
        style={{
          height: "97vh",
          paddingTop: "3.5rem",
          backgroundColor: "#2f2f2f",
        }}
      >
        <CardProfil profile={profile} />
      </div>
    </>
  );
}

export default Profil;
