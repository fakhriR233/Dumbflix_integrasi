import React, { useEffect } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import TopNavbar from "../Utility/TopNavbar";
//import { BsPaperclip } from "react-icons/bs";

function Payment() {
  let Navigate = useNavigate();
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

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-stNP1LORimDrtwe4";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleBuy = useMutation(async (e) => {
    try {
      const data = {
        userId: profile?.ID,
      };

      const body = JSON.stringify(data);

      const config = {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.token,
          "Content-type": "application/json",
        },
        body,
      };

      // Insert transaction data
      const response = await API.post("/transaction", config);
      console.log(response);
      const token = response.data.data.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          Navigate("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          Navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {}
  });

  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#2f2f2f" }}>
      <Row>
        <TopNavbar />
      </Row>

      <Row>
        <Col className="" style={{ textAlign: "center" }}>
          <h1 className="mt-5 mb-4 text-white fw-bold">Premium</h1>
          <p className="text-white">
            Bayar Sekarang dan Nikmati streaming film-film yang kekinian dari{" "}
            <span className="text-danger fw-bold">DUMBFLIX</span>
          </p>
          <p>
            <span className="text-danger fw-bold">DUMBFLIX : </span>{" "}
            <span className="fw-bold text-white">0981119181</span>
          </p>
        </Col>
        <Row className="d-flex flex-column justify-content-center mt-5">
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3">
            <Form.Control
              className=" text-center"
              type="text"
              placeholder="Input Your Account Number"
              style={{ width: "350px" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3">
            <InputGroup className="mb-3" style={{ width: "350px" }}>
              <Form.Control
                className="text-center fw-bold text-danger"
                type="file"
              />
              {/* <InputGroup.Text id="basic-addon2" className='text-danger fw-bold' style={{ fontSize:'25px' }}><BsPaperclip/></InputGroup.Text> */}
            </InputGroup>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3">
            <p
              onClick={(e) => handleBuy.mutate()}
              className="btn btn-danger mt-3"
              style={{ width: "350px" }}
            >
              Kirim
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Payment;
