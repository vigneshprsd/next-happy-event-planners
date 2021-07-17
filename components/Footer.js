import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import logo from "../public/images/logo.png";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
import React, { useState } from "react";

const Footer = () => {
  const [mobile, setMobile] = useState("917506061019");
  const [message, setMessage] = useState("Hello Happy Event Planner");

  const handleChange = (e) => {
    if(e.target.value === ""){
      setMessage("Hello Happy Event Planner")
    }else{
      setMessage(e.target.value)
    }
  }

  return (
    <footer className="footer widget-footer ttm-bgcolor-black ttm-bg ttm-bgimage-yes clearfix py-5">
      <Container>
        <div className="bg-dark h-auto text-white">
          <Row className="w-100 m-auto">
            <Col md="4" lg="4" sm="12">
              <div className="m-auto">
                <div className="d-flex">
                  <Image className="w-100" src={logo} alt="logo"></Image>
                </div>
                <span className="w-100 text-left">
                  Address : Lorem Ipsum ajjsm njdsj jnj , Mumbai Contact :
                  7506061019 | 7304260456
                </span>
              </div>
            </Col>
            <Col md="4" lg="4" sm="12">
              <div className="w-00 text-left">
                <div className="w-100">
                  <span className="border-bottom">
                    Frequently Asked Questions
                  </span>
                </div>
                <a className="w-100">How Can I Set An Event?</a>
                <br />
                <a className="w-100">Event Catalogue</a>
                <br />
                <a className="w-100">What Venues Do You Use?</a>
                <br />
                <a className="w-100">Event Catalogue</a>
                <br />
              </div>
            </Col>
            <Col md="4" lg="4" sm="12">
              <div className="">Book / Contact Now</div>
              <InputGroup className="mt-3">
                <Form.Control
                onChange={(e)=>handleChange(e)}
                  type="text"
                  placeholder="Enter Message(Optional)"
                ></Form.Control>
                <ReactWhatsapp
                  className="btn btn-outline-secondary btn-sm"
                  number={mobile}
                  message={message}
                >
                  Contact
                </ReactWhatsapp>
              </InputGroup>
              <div className="">
                Or Mail us @ <a href="mailto:happyeventplanner25@gmail.com">happyeventplanner25@gmail.com</a>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="w-100 d-flex justify-content-center py-3">
            <span
              style={{ width: 45, height: 45 }}
              className="p-2 border rounded-circle text-center m-1"
            >
              <i className="fa fa-facebook"></i>
            </span>
            <span
              style={{ width: 45, height: 45 }}
              className="p-2 border rounded-circle text-center m-1"
            >
              <i className="fa fa-instagram"></i>
            </span>
            <span
              style={{ width: 45, height: 45 }}
              className="p-2 border rounded-circle text-center m-1"
            >
              <i className="fa fa-twitter"></i>
            </span>
            <span
              style={{ width: 45, height: 45 }}
              className="p-2 border rounded-circle text-center m-1"
            >
              <i className="fa fa-google"></i>
            </span>
          </div>
          <div className="copyright w-100 text-center">
            {" "}
            &#169; {new Date().getFullYear()} Happy Events. All Rights Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
