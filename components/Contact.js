import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../public/images/bg-image/col-bgimage-3.jpg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="ttm-row contact-form-section2 bg-layer break-991-colum clearfix">
      <Container>
        <Row className=" res-1199-mlr-15">
          <Col md="8" lg="8" className="m-auto">
            <div className="padding-12 box-shadow">
              <div className="section-title clearfix mb-30">
                <h3 className="title">Get The Party Started</h3>
                <p>
                  As the premier event planning company in the area. Each event
                  and client is unique and we believe our services should be as
                  well.
                </p>
              </div>
              <form
                id="contactform"
                className="row contactform wrap-form clearfix"
                method="post"
                action="#"
                noValidate="novalidate"
              >
                <label className="col-md-6">
                  <i className="ti ti-user"></i>
                  <span className="ttm-form-control">
                    <input
                      className="text-input"
                      name="name"
                      type="text"
                      value=""
                      placeholder="Your Name:*"
                      required="required"
                    />
                  </span>
                </label>
                <label className="col-md-6">
                  <i className="ti ti-email"></i>
                  <span className="ttm-form-control">
                    <input
                      className="text-input"
                      name="email"
                      type="text"
                      value=""
                      placeholder="Your email-id:*"
                      required="required"
                    />
                  </span>
                </label>
                <label className="col-md-6">
                  <i className="ti ti-location-pin"></i>
                  <span className="ttm-form-control">
                    <input
                      className="text-input"
                      name="venue"
                      type="text"
                      value=""
                      placeholder="Venue"
                      required="required"
                    />
                  </span>
                </label>
                <label className="col-md-6">
                  <i className="ti ti-mobile"></i>
                  <span className="ttm-form-control">
                    <input
                      className="text-input"
                      name="phone"
                      type="text"
                      value=""
                      placeholder="Your Number:*"
                      required="required"
                    />
                  </span>
                </label>
                <label className="col-md-12">
                  <i className="ti ti-comment"></i>
                  <span className="ttm-form-control">
                    <textarea
                      className="text-area"
                      name="message"
                      placeholder="Your Message:*"
                      required="required"
                    ></textarea>
                  </span>
                </label>
                <input
                  name="submit"
                  type="submit"
                  value="Make a Reservation"
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor mt-20"
                  id="submit"
                  title="Make a Reservation"
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
