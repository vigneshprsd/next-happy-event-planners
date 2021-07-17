import React from 'react'
import img1 from "../public/images/blog/blog-01.jpg"
import img2 from "../public/images/blog/blog-02.jpg"
import img3 from "../public/images/blog/blog-03.jpg"
import img4 from "../public/images/blog/blog-04.jpg"
import img5 from "../public/images/blog/blog-05.jpg"
import img6 from "../public/images/blog/blog-06.jpg"
import Image from 'next/image'
import { Container,Row,Col } from 'react-bootstrap'


const AllService = () => {
    return (
        <div className="ttm-row service-section3 clearfix">
        <Container>
            <Row className="text-center m-auto">
                <Col lg="12">
                    <div className=" section-title clearfix">
                        <h4>GREAT PROVIDE PLANWEY</h4>
                        <h2 className="title">Provide Best Services</h2>
                    </div>
                </Col>
            </Row>
            <Row className="m-auto">
                <Col md="6" lg="4">
                    <div className="featured-imagebox static-title mb-45">
                        <div className="featured-thumbnail">
                            <Image className="img-fluid" src={img1} alt=""/>
                        </div>
                        <div className="featured-content">
                            <div className="featured-title">
                                <h5><a href="#"> Wedding</a></h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="6" lg="4">
                    <div className="featured-imagebox static-title mb-45">
                        <div className="featured-thumbnail">
                            <Image className="img-fluid" src={img2} alt=""/>
                        </div>
                        <div className="featured-content">
                            <div className="featured-title">
                                <h5><a href="#">Private Party</a></h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="6" lg="4">
                    <div className="featured-imagebox static-title mb-45">
                        <div className="featured-thumbnail">
                            <Image className="img-fluid" src={img3} alt=""/>
                        </div>
                        <div className="featured-content">
                            <div className="featured-title">
                                <h5><a href="#">Corporate Party</a></h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="6" lg="4">
                    <div className="featured-imagebox static-title mb-45">
                        <div className="featured-thumbnail">
                            <Image className="img-fluid" src={img4} alt=""/>
                        </div>
                        <div className="featured-content">
                            <div className="featured-title">
                                <h5><a href="#"> Wedding</a></h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="6" lg="4">
                    <div className="featured-imagebox static-title mb-45">
                        <div className="featured-thumbnail">
                            <Image className="img-fluid" src={img5} alt=""/>
                        </div>
                        <div className="featured-content">
                            <div className="featured-title">
                                <h5><a href="#">Private Party</a></h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="6" lg="4">
                    <div className="featured-imagebox static-title mb-45">
                        <div className="featured-thumbnail">
                            <Image className="img-fluid" src={img6} alt=""/>
                        </div>
                        <div className="featured-content">
                            <div className="featured-title">
                                <h5><a href="#">Corporate Party</a></h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default AllService
