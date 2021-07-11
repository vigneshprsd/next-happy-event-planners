import React from "react";
import { Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="footer widget-footer bg-img11 ttm-bgcolor-black ttm-bg ttm-bgimage-yes clearfix">
      <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
      <div className="second-footer">
        <Container>
          <div className="second-footer-inner">
            <Row>
              <div className="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3 m-auto">
                <div className="widget widget-out-link clearfix">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="widget-contact">
                    <li>
                      <i className="fa fa-map-marker"></i>Spectrocode, XXXXXXX XX
                      <br />
                      XX XXXXX XX., XXX XXXXX, XXXX
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>
                      <a href="#">info@example.com</a>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>Phone: (+01) 123 456 7890{" "}
                      <br />
                      Support: (+01) 123 456 7890{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3  m-auto">
                <div className="widget widget_nav_menu clearfix">
                  <h4 className="widget-title">Site Links </h4>
                  <ul className="menu-footer-services">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="widget-area col-xs-12 col-sm-6 col-md-6 col-lg-3  m-auto">
                <div className="widget widget-out-link clearfix ">
                  <h4 className="widget-title">Frequent Questions</h4>
                  <ul className="widget-text">
                    <li>
                      <a href="#">How Can I Set An Event? </a>
                    </li>
                    <li>
                      <a href="#">What Venues Do You Use? </a>
                    </li>
                    <li>
                      <a href="#">Event Catalogue </a>
                    </li>
                    <li>
                      <a href="#">How Can I Set An Event? </a>
                    </li>
                    <li>
                      <a href="#">What Venues Do You Use? </a>
                    </li>
                    <li>
                      <a href="#">Event Catalogue </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
