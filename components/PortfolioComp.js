import { useState } from "react";
import { Col, Container, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Image from "next/image";
import img1 from "../public/images/portfolio/01.jpg";

const PortfolioComp = () => {
  const [key, setKey] = useState("All");

  const renderPortfolio = () => {
    return (
      <div class="featured-imagebox ttm-box-view-top-image featured-imagebox-portfolio mb-30">
        <div class="featured-portfolio-item">
          <div class="featured-thumbnail">
            <a href="#">
              {" "}
              <Image className="img-fluid" src={img1} alt="image" />
            </a>
          </div>
          <div class="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
            <div class="ttm-media-link">
              <a
                class="ttm_prettyphoto ttm_image"
                data-gal="prettyPhoto[gallery1]"
                title="Autue Art Gallery Opening"
                href="images/portfolio/01.jpg"
                data-rel="prettyPhoto"
              >
                <i class="fa fa-image"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="featured-bottom-content text-center featured-bottom-portfolio-content">
          <div class="featured-title">
            <h6 class="title-post">Autue Art Gallery Opening</h6>
          </div>
          <span class="category">Private Party</span>
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
