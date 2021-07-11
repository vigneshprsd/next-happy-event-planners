import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";
import img1 from "../public/images/feedback1.jpg";
import img2 from "../public/images/feedback2.jpg";
import img3 from "../public/images/feedback3.jpg";
import img4 from "../public/images/feedback2.jpg";
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className="py-5">
      <Heading title="Testimonial" />
      <Container>
        <Carousel interval={4000} prevLabel={""} nextLabel={""} slide={true}>
          <Carousel.Item>
            <Row>
              <Col md="6" sm="12" className="mb-2">
                <Card className="border-0 custom-box-shadow p-4 custom-card">
                  <div class="testimonials text-center with-caption-border">
                    <div class="testimonial-content">
                      <div class="testimonial-avatar pb-15">
                        <div class="testimonial-img">
                          <Image class="img-center" src={img3} alt="" />
                        </div>
                      </div>
                      <blockquote>
                        Best North Indian wedding planner. Quick and one stop
                        solution for all the wedding requirements. He owns all
                        the items required
                      </blockquote>
                      <div class="testimonial-caption">
                        <h6>ADOM SMITH</h6>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md="6" sm="12">
                <Card className="border-0 custom-box-shadow p-4 custom-card">
                  <div class="testimonials text-center with-caption-border">
                    <div class="testimonial-content">
                      <div class="testimonial-avatar pb-15">
                        <div class="testimonial-img">
                          <Image class="img-center" src={img2} alt="" />
                        </div>
                      </div>
                      <blockquote>
                        Thank u so much for making our event successful. they
                        are very professional and everything was on time one's
                        again appreciate it work.
                      </blockquote>
                      <div class="testimonial-caption">
                        <h6>ADOM SMITH</h6>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md="6" sm="12">
                <Card className="border-0 custom-box-shadow p-4 custom-card">
                  <div class="testimonials text-center with-caption-border">
                    <div class="testimonial-content">
                      <div class="testimonial-avatar pb-15">
                        <div class="testimonial-img">
                          <Image class="img-center" src={img1} alt="" />
                        </div>
                      </div>
                      <blockquote>
                        You are amazing! You worked so hard for Cady's wedding.
                        You had every little detail under control....you need to
                        run my life!
                      </blockquote>
                      <div class="testimonial-caption">
                        <h6>ADOM SMITH</h6>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md="6" sm="12">
                <Card className="border-0 custom-box-shadow p-4 custom-card">
                  <div class="testimonials text-center with-caption-border">
                    <div class="testimonial-content">
                      <div class="testimonial-avatar pb-15">
                        <div class="testimonial-img">
                          <Image class="img-center" src={img2} alt="" />
                        </div>
                      </div>
                      <blockquote>
                        Thank u so much for making our event successful. they
                        are very professional and everything was on time one's
                        again appreciate it work.
                      </blockquote>
                      <div class="testimonial-caption">
                        <h6>ADOM SMITH</h6>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonial;
