import React, { useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";


const Service = () => {
  return (
    <Container className="py-5">
      <Row className="w-100 m-auto">
        <Col md="4" lg="4" sm="12" className="m-auto py-1">
          <Zoom>
            <div className="featured-box style3 text-center ttm-bgcolor-white box-shadow1 res-mb30-767">
              <div className="featured-icon">
                <div className="ttm-icon ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                  <i className="flaticon flaticon-marriage-couple"></i>
                </div>
              </div>
              <div className="featured-content">
                <div className="featured-title">
                  <h5>Wedding</h5>
                </div>
                <div className="featured-desc">
                  <p>
                    A wedding and Birthday planner is a who assists with the
                    design, planning and management of a client’s. wedding.
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        </Col>
        <Col md="4" lg="4" sm="12" className="m-auto py-1">
          <Zoom>
            <div className="featured-box style3 text-center ttm-bgcolor-white box-shadow1">
              <div className="featured-icon">
                <div className="ttm-icon ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                  <i className="flaticon flaticon-dinner-table"></i>
                </div>
              </div>
              <div className="featured-content">
                <div className="featured-title">
                  <h5>Private Party</h5>
                </div>
                <div className="featured-desc">
                  <p>
                    A wedding and Birthday planner is a who assists with the
                    design, planning and management of a client’s. wedding.
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        </Col>
        <Col md="4" lg="4" sm="12" className="m-auto py-1">
          <Zoom>
            <div className="featured-box style3 text-center ttm-bgcolor-white box-shadow1 res-mb30-767">
              <div className="featured-icon">
                <div className="ttm-icon ttm-icon_element-size-sm ttm-icon_element-color-skincolor">
                  <i className="flaticon flaticon-cake"></i>
                </div>
              </div>
              <div className="featured-content">
                <div className="featured-title">
                  <h5>Birthday Party</h5>
                </div>
                <div className="featured-desc">
                  <p>
                    A wedding and Birthday planner is a who assists with the
                    design, planning and management of a client’s. wedding.
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
