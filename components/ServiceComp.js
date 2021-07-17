import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";
import Image from "next/image";
import baloon from "../public/Icons/balloons.png";
import flower from "../public/Icons/flower-crown.png";
import dj from "../public/Icons/dj.png";
import micro from "../public/Icons/microphone.png";
import moc from "../public/Icons/coconut-drink.png";
import party from "../public/Icons/party.png";
import photo from "../public/Icons/camera.png";
import baby from "../public/Icons/baby-boy.png";
import dance from "../public/Icons/dance.png";
import vp from "../public/Icons/vp.png";
import wed from "../public/Icons/wedding.png";
import nail from "../public/Icons/nail.png";
import selfie from "../public/Icons/selfie.png";
import tattoo from "../public/Icons/tattoo.png";


const ServiceComp = () => {
  return (
    <Container>
      <Row className="m-auto">
        <Heading title="Service We Provide" />
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={baloon} alt="baloon"></Image>
              </div>
              <span className="p-3">Baloon Decoration</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={flower} alt="flower"></Image>
              </div>
              <span className="p-3"> Flower Decoration</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={dj} alt="dj"></Image>
              </div>
              <span className="p-3">DJ Sound System</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={micro} alt="microphone"></Image>
              </div>
              <span className="p-3">Anchor/Game Host</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={wed} alt="wed"></Image>
              </div>
              <span className="p-3">Wedding/Engagement/Haldi</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={moc} alt="microphone"></Image>
              </div>
              <span className="p-3">Mocktail/Cocktail</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={party} alt="party"></Image>
              </div>
              <span className="p-3">House Parties</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={photo} alt="photo"></Image>
              </div>
              <span className="p-3">Photography</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={baby} alt="baby"></Image>
              </div>
              <span className="p-3">Baby Shower</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={selfie} alt="selfie"></Image>
              </div>
              <span className="p-3">Selfie Counter</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={baloon} alt="ballon"></Image>
              </div>
              <span className="p-3">Baloon Sculpture</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={nail} alt="nail"></Image>
              </div>
              <span className="p-3">Nail Artist</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={vp} alt="vp"></Image>
              </div>
              <span className="p-3">Special Entry</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={dance} alt="dance"></Image>
              </div>
              <span className="p-3">Dance</span>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="3" xs="12" sm="6" className="p-1">
          <Card className="w-100 p-2 rounded custom-box-shadow border-0">
            <div className="d-flex">
              <div className="icon-image">
                <Image src={tattoo} alt="tattoo"></Image>
              </div>
              <span className="p-3">Tattoo Artist</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceComp;
