import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img1 from "../public/images/bg-image/col-bgimage-3.jpg";
import Image from 'next/image';

const Contact = () => {
    return (
        <div class="ttm-row contact-form-section2 bg-layer break-991-colum clearfix">
                <Container>
                   <Row class=" res-1199-mlr-15">
                        
                        <Col md="8" lg="8" className="m-auto">
                            <div class="padding-12 box-shadow">
                                <div class="section-title clearfix mb-30">
                                    <h3 class="title">Get The Party Started</h3>
                                    <p>As the premier event planning company in the area. Each event and client is unique and we believe our services should be as well.</p>
                                </div>
                                <form id="contactform" class="row contactform wrap-form clearfix" method="post" action="#" novalidate="novalidate">
                                    <label class="col-md-6">
                                        <i class="ti ti-user"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="name" type="text" value="" placeholder="Your Name:*" required="required"/></span>
                                    </label>
                                    <label class="col-md-6">
                                        <i class="ti ti-email"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="email" type="text" value="" placeholder="Your email-id:*" required="required"/></span>
                                    </label>
                                     <label class="col-md-6">
                                        <i class="ti ti-location-pin"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="venue" type="text" value="" placeholder="Venue" required="required"/></span>
                                    </label>
                                    <label class="col-md-6">
                                        <i class="ti ti-mobile"></i>
                                        <span class="ttm-form-control"><input class="text-input" name="phone" type="text" value="" placeholder="Your Number:*" required="required"/></span>
                                    </label>
                                    <label class="col-md-12">
                                        <i class="ti ti-comment"></i>
                                        <span class="ttm-form-control"><textarea class="text-area" name="message" placeholder="Your Message:*" required="required"></textarea></span>
                                    </label>
                                    <input name="submit" type="submit" value="Make a Reservation" class="ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor mt-20" id="submit" title="Make a Reservation"/>
                               </form>
                            </div>
                        </Col>
                    </Row> 
                </Container>
            </div>
    )
}

export default Contact
