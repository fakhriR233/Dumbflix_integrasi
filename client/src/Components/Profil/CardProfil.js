import { Row, Col, Button } from "react-bootstrap";
import { IoIosContact, IoIosMail, IoIosMale, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import VIPImage from "../../Images/vipimage.png";
import FotoProfile from "../../Images/profil.jpeg";

function CardProfil({ profile }) {
  console.log(profile);
  return (
    <>
      <Row
        className="d-flex justify-content-center align-items-center bg-dark"
        style={{
          maxWidth: "785px",
          height: "489px",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        <Col md={6}>
          <h6
            className="text-white p-4 fw-bold"
            style={{ letterSpacing: "3px" }}
          >
            Profile Info
          </h6>
          <div className="d-flex mt-1 mx-4">
            <IoIosContact style={{ fontSize: "37px", color: "red" }} />
            <div className="text-white d-flex flex-column ms-3">
              <h6
                style={{
                  fontFamily: "Avenir 85 Heavy",
                  fontStyle: "Heavy",
                  fontSize: "14px",
                  lineHeight: "20px",
                  align: "Left",
                  verticalAlign: "Center",
                }}
              >
                {profile?.FullName}
              </h6>
              <p
                style={{
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  fontSize: "12px",
                }}
                className="text-muted"
              >
                Fullname
              </p>
            </div>
          </div>

          <div className="d-flex mt-1 mx-4">
            <IoIosMail style={{ fontSize: "37px", color: "red" }} />
            <div className="text-white d-flex flex-column ms-3">
              <h6
                style={{
                  fontFamily: "Avenir 85 Heavy",
                  fontStyle: "Heavy",
                  fontSize: "14px",
                  lineHeight: "20px",
                  align: "Left",
                  verticalAlign: "Center",
                }}
              >
                {profile?.email}
              </h6>
              <p
                style={{
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  fontSize: "12px",
                }}
                className="text-muted"
              >
                email
              </p>
            </div>
          </div>

          <div className="d-flex mt-1 mx-4">
            <img
              src={VIPImage}
              alt="foto"
              style={{ width: "32px", height: "30px" }}
            />
            <div className="text-white d-flex flex-column ms-3">
              <h6
                style={{
                  fontFamily: "Avenir 85 Heavy",
                  fontStyle: "Heavy",
                  fontSize: "14px",
                  lineHeight: "20px",
                  align: "Left",
                  verticalAlign: "Center",
                }}
                className="ps-1"
              >
                {profile?.subscribe !== "" && profile?.subscribe !== "false"
                  ? "Active"
                  : "Belom Subscribe KWOKWOKWO"}
              </h6>
              <p
                style={{
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  fontSize: "12px",
                }}
                className="text-muted ps-1"
              >
                Status
              </p>
            </div>
          </div>

          <div className="d-flex mt-1 mx-4">
            <IoIosMale style={{ fontSize: "37px", color: "red" }} />
            <div className="text-white d-flex flex-column ms-3">
              <h6
                style={{
                  fontFamily: "Avenir 85 Heavy",
                  fontStyle: "Heavy",
                  fontSize: "14px",
                  lineHeight: "20px",
                  align: "Left",
                  verticalAlign: "Center",
                }}
              >
                {profile?.gender}
              </h6>
              <p
                style={{
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  fontSize: "12px",
                }}
                className="text-muted"
              >
                Gender
              </p>
            </div>
          </div>

          <div className="d-flex mt-1 mx-4">
            <IoMdCall style={{ fontSize: "37px", color: "red" }} />
            <div className="text-white d-flex flex-column ms-3">
              <h6
                style={{
                  fontFamily: "Avenir 85 Heavy",
                  fontStyle: "Heavy",
                  fontSize: "14px",
                  lineHeight: "20px",
                  align: "Left",
                  verticalAlign: "Center",
                }}
              >
                {profile?.phone}
              </h6>
              <p
                style={{
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  fontSize: "12px",
                }}
                className="text-muted"
              >
                Phone
              </p>
            </div>
          </div>

          <div className="d-flex mt-1 mx-4">
            <IoLocationSharp style={{ fontSize: "37px", color: "red" }} />
            <div className="text-white d-flex flex-column ms-3">
              <h6
                style={{
                  fontFamily: "Avenir 85 Heavy",
                  fontStyle: "Heavy",
                  fontSize: "14px",
                  lineHeight: "20px",
                  align: "Left",
                  verticalAlign: "Center",
                }}
              >
                {profile?.address}
              </h6>
              <p
                style={{
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  fontSize: "12px",
                }}
                className="text-muted"
              >
                Address
              </p>
            </div>
          </div>
        </Col>

        <Col md={6} className="text-center">
          <Row>
            <Col>
              <img
                src={FotoProfile}
                alt="foto"
                style={{
                  maxWidth: "280px",
                  height: "345px",
                  borderRadius: "5px",
                }}
              />
            </Col>

            <Col>
              <Button
                style={{
                  backgroundColor: "red",
                  border: "none",
                  width: "280px",
                }}
                className="mt-3"
              >
                Change Foto Profile
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default CardProfil;
