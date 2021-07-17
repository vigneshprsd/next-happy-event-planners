import React from "react";
import Heading from "./Heading";
import Team1 from "../public/images/team/team-img2.jpg";
import Image from "next/image"
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      <Heading title="About" />
      <Row className="justify-content-center w-100 m-auto">
        <div className="col-md-4 col-lg-4 mb-30">
          <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div className="featured-thumbnail">
              <Image className="img-fluid" src={Team1} alt="image" />
            </div>
            <div className="featured-content featured-content-team">
              <div className="featured-title">
                <h5>
                  <a href="team-details.html">AKSHATHA POOJARY</a>
                </h5>
              </div>
              <span className="category">Founder</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-30">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            quis dicta iusto nostrum, nemo praesentium officia facilis dolorum,
            quia illo nam a consequuntur distinctio? Sint quam exercitationem
            doloribus ipsum officiis.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Veritatis quis dicta iusto nostrum, nemo
            praesentium officia facilis dolorum, quia illo nam a consequuntur
            distinctio? Sint quam exercitationem doloribus ipsum officiis.
          </p>
          <ul>
            <li>
              <h5>Our services</h5>
            </li>
            <li>1. Wedding Cakes</li>
            <li>2. Photo</li>
            <li>3. Venue Selections</li>
            <li>4. Managing Your Guest List</li>
            <li>5. Unforgatable Time</li>
            <li>6. Venue finding</li>
          </ul>
        </div>
      </Row>
    </Container>
  );
};

export default About;
