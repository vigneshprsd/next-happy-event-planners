import React from "react";
import Team1 from "../public/images/team/team-img2.jpg";
import Team2 from "../public/images/team/team-img1.jpg";
import Team3 from "../public/images/team/team-img3.jpg";
import Team4 from "../public/images/team/team-img4.jpg";
import Team5 from "../public/images/team/team-img5.jpg";
import Team6 from "../public/images/team/team-img6.jpg";
import Image from 'next/image'
import { Col, Row } from "react-bootstrap";

const Team = () => {
  return (
    <div className="container py-5">
      <Row>
        <Col md="6" lg="4"  className="mb-30">
          <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div className="featured-thumbnail">
              <a href="team-details.html">
                <Image className="img-fluid" src={Team1} alt="image" />
              </a>
            </div>
            <div className="featured-content featured-content-team">
              <div className="featured-title">
                <h5>
                  <a href="team-details.html">Lenalee Crus</a>
                </h5>
              </div>
              <span className="category">Graphic Designer</span>
            </div>
          </div>
        </Col>
        <Col md="6" lg="4"  className="mb-30">
          <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div className="featured-thumbnail">
              <a href="team-details.html">
                <Image className="img-fluid" src={Team2} alt="image" />
              </a>
            </div>
            <div className="featured-content featured-content-team">
              <div className="featured-title">
                <h5>
                  <a href="team-details.html">Diana Aiden</a>
                </h5>
              </div>
              <span className="category">Event Planner</span>
            </div>
          </div>
        </Col>
        <Col md="6" lg="4"  className="mb-30">
          <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div className="featured-thumbnail">
              <a href="team-details.html">
                <Image className="img-fluid" src={Team3} alt="image" />
              </a>
            </div>
            <div className="featured-content featured-content-team">
              <div className="featured-title">
                <h5>
                  <a href="team-details.html">Jimmy Edward</a>
                </h5>
              </div>
              <span className="category">Event Manager</span>
            </div>
          </div>
        </Col>
        <Col md="6" lg="4"  className="mb-30">
          <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div className="featured-thumbnail">
              <a href="team-details.html">
                <Image className="img-fluid" src={Team4} alt="image" />
              </a>
            </div>
            <div className="featured-content featured-content-team">
              <div className="featured-title">
                <h5>
                  <a href="team-details.html">Steve Logan</a>
                </h5>
              </div>
              <span className="category">Graphic Designer</span>
            </div>
          </div>
        </Col>
        <Col md="6" lg="4"  className="mb-30">
          <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div className="featured-thumbnail">
              <a href="team-details.html">
                <Image className="img-fluid" src={Team5} alt="image" />
              </a>
            </div>
            <div className="featured-content featured-content-team">
              <div className="featured-title">
                <h5>
                  <a href="team-details.html">Grace Harper</a>
                </h5>
              </div>
              <span className="category">Event Planner</span>
            </div>
          </div>
        </Col>
        <Col md="6" lg="4"  className="mb-30">
          <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div className="featured-thumbnail">
              <a href="team-details.html">
                <Image className="img-fluid" src={Team6} alt="image" />
              </a>
            </div>
            <div className="featured-content featured-content-team">
              <div className="featured-title">
                <h5>
                  <a href="team-details.html">Ronney Hayden</a>
                </h5>
              </div>
              <span className="category">Event Manager</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
