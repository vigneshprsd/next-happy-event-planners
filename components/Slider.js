import React from "react";
import { Carousel } from "react-bootstrap";
import bg1 from "../public/images/slides/slider-mainbg-001.jpg";
import bg2 from "../public/images/slides/slider-mainbg-004.jpg";
import bg3 from "../public/images/slides/slider-mainbg-003.jpg";
import Image from 'next/image'

const Slider = () => {
  return (
    <Carousel 
    prevLabel={""}
    nextLabel={""}
    slide={false} fade>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-white Carousel-title">The Event Planners</div>
          <p className="Carousel-desc">
            23 Years of Planning Large Successful Events for Fortune
            <br />
            500 Companies throughout the United States
          </p>
        </Carousel.Caption>
        <Image className="d-block w-100" src={bg1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-white Carousel-title">The Event Planners</div>
          <p className="Carousel-desc">
            23 Years of Planning Large Successful Events for Fortune
            <br />
            500 Companies throughout the United States
          </p>
        </Carousel.Caption>
        <Image className="d-block w-100" src={bg2} alt="second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="text-white Carousel-title">The Event Planners</div>
          <p className="Carousel-desc">
            23 Years of Planning Large Successful Events for Fortune
            <br />
            500 Companies throughout the United States
          </p>
        </Carousel.Caption>
        <Image className="d-block w-100" src={bg3} alt="third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
