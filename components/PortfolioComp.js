import { useState } from "react";
import { Col, Container, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Image from "next/image";
import img1 from "../public/images/portfolio/01.jpg";

const PortfolioComp = () => {
  const [key, setKey] = useState("All");

  const renderPortfolio = () => {
    return (
      <div className="featured-imagebox ttm-box-view-top-image featured-imagebox-portfolio mb-30">
        <div className="featured-portfolio-item">
          <div className="featured-thumbnail">
            <a href="#">
              {" "}
              <Image className="img-fluid" src={img1} alt="image" />
            </a>
          </div>
          <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
            <div className="ttm-media-link">
              <a
                className="ttm_prettyphoto ttm_image"
                data-gal="prettyPhoto[gallery1]"
                title="Autue Art Gallery Opening"
                href="images/portfolio/01.jpg"
                data-rel="prettyPhoto"
              >
                <i className="fa fa-image"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="featured-bottom-content text-center featured-bottom-portfolio-content">
          <div className="featured-title">
            <h6 className="title-post">Autue Art Gallery Opening</h6>
          </div>
          <span className="category">Private Party</span>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <Row className="m-auto w-100 py-3">
        <Col lg="12">
          <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 ">
            <Tab eventKey="All" title="All">
              <Row>
                <Col lg="4" md="6">
                  {renderPortfolio()}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Private Party" title="Private Party">
              <Row>
                <Col lg="4" md="6">
                  {renderPortfolio()}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Birthdays" title="Birthdays">
              <Row>
                <Col lg="4" md="6">
                  {renderPortfolio()}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Engagements" title="Engagements">
              <Row>
                <Col lg="4" md="6">
                  {renderPortfolio()}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Weddings" title="Weddings">
              <Row>
                <Col lg="4" md="6">
                  {renderPortfolio()}
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioComp;
