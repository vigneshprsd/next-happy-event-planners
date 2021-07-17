import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";
import ReactWhatsapp from "react-whatsapp";
import Zoom from "react-reveal/Zoom";

const bookEvent = (data) => {};

const Pricing = () => {
  const [mobile, setMobile] = useState("917506061091");
  const [message, setMessage] = useState("Hello Happy Event Planner");

  return (
    <Container className="py-5">
      <Row className="justify-content-center m-auto">
        <Heading title="Pricing Plans" />
        <>
          <Col md="3" sm="12" className="mb-2 ">
            <Zoom>
              <Card className="border-0 custom-box-shadow p-4 text-center rounded">
                <Card.Title>Basic Plan</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit.
                  <br /> Qui quam quibusdam dolor,
                  <br /> iste itaque earum maxime officiis
                  <br /> laborum reprehenderit sed quae iusto sequi doloremque.
                  Harum magnam perspiciatis officiis repellendus atque. <br />
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit.
                  <br /> Qui quam quibusdam dolor,
                  <br /> iste itaque earum maxime officiis
                  <br />
                </Card.Text>
                <ReactWhatsapp
                  className="bg-dark rounded w-100"
                  number={mobile}
                  message={message}
                >
                  Book Now
                </ReactWhatsapp>
              </Card>
            </Zoom>
          </Col>
          <Col md="3" sm="12" className="mb-2 ">
            <Zoom>
              <Card className="border-0 custom-box-shadow p-4 text-center rounded">
                <Card.Title>Standard Plan</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit.
                  <br /> Qui quam quibusdam dolor,
                  <br /> iste itaque earum maxime officiis
                  <br /> laborum reprehenderit sed quae iusto sequi doloremque.
                  Harum magnam perspiciatis officiis repellendus atque. <br />
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit.
                  <br /> Qui quam quibusdam dolor,
                  <br /> iste itaque earum maxime officiis
                  <br />
                </Card.Text>
                <ReactWhatsapp
                  className="bg-dark rounded w-100"
                  number={mobile}
                  message={message}
                >
                  Book Now
                </ReactWhatsapp>
              </Card>
            </Zoom>
          </Col>
          <Col md="3" sm="12" className="mb-2 ">
            <Zoom>
              <Card className="border-0 custom-box-shadow p-4 text-center rounded">
                <Card.Title>Premium Plan</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit.
                  <br /> Qui quam quibusdam dolor,
                  <br /> iste itaque earum maxime officiis
                  <br /> laborum reprehenderit sed quae iusto sequi doloremque.
                  Harum magnam perspiciatis officiis repellendus atque. <br />
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit.
                  <br /> Qui quam quibusdam dolor,
                  <br /> iste itaque earum maxime officiis
                  <br />
                </Card.Text>
                <ReactWhatsapp
                  className="bg-dark rounded w-100"
                  number={mobile}
                  message={message}
                >
                  Book Now
                </ReactWhatsapp>
              </Card>
            </Zoom>
          </Col>
        </>
      </Row>
    </Container>
  );
};

export default Pricing;
