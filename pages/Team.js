import React from "react";
import Team1 from "../public/images/team/team-img2.jpg";
import Team2 from "../public/images/team/team-img1.jpg";
import Team3 from "../public/images/team/team-img3.jpg";
import Team4 from "../public/images/team/team-img4.jpg";
import Team5 from "../public/images/team/team-img5.jpg";
import Team6 from "../public/images/team/team-img6.jpg";
import Image from 'next/image'

const Team = () => {
  return (
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-30">
          <div class="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div class="featured-thumbnail">
              <a href="team-details.html">
                <Image class="img-fluid" src={Team1} alt="image" />
              </a>
            </div>
            <div class="featured-content featured-content-team">
              <div class="featured-title">
                <h5>
                  <a href="team-details.html">Lenalee Crus</a>
                </h5>
              </div>
              <span class="category">Graphic Designer</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-30">
          <div class="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div class="featured-thumbnail">
              <a href="team-details.html">
                <Image class="img-fluid" src={Team2} alt="image" />
              </a>
            </div>
            <div class="featured-content featured-content-team">
              <div class="featured-title">
                <h5>
                  <a href="team-details.html">Diana Aiden</a>
                </h5>
              </div>
              <span class="category">Event Planner</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-30">
          <div class="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div class="featured-thumbnail">
              <a href="team-details.html">
                <Image class="img-fluid" src={Team3} alt="image" />
              </a>
            </div>
            <div class="featured-content featured-content-team">
              <div class="featured-title">
                <h5>
                  <a href="team-details.html">Jimmy Edward</a>
                </h5>
              </div>
              <span class="category">Event Manager</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-30">
          <div class="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div class="featured-thumbnail">
              <a href="team-details.html">
                <Image class="img-fluid" src={Team4} alt="image" />
              </a>
            </div>
            <div class="featured-content featured-content-team">
              <div class="featured-title">
                <h5>
                  <a href="team-details.html">Steve Logan</a>
                </h5>
              </div>
              <span class="category">Graphic Designer</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-30">
          <div class="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div class="featured-thumbnail">
              <a href="team-details.html">
                <Image class="img-fluid" src={Team5} alt="image" />
              </a>
            </div>
            <div class="featured-content featured-content-team">
              <div class="featured-title">
                <h5>
                  <a href="team-details.html">Grace Harper</a>
                </h5>
              </div>
              <span class="category">Event Planner</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-30">
          <div class="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
            <div class="featured-thumbnail">
              <a href="team-details.html">
                <Image class="img-fluid" src={Team6} alt="image" />
              </a>
            </div>
            <div class="featured-content featured-content-team">
              <div class="featured-title">
                <h5>
                  <a href="team-details.html">Ronney Hayden</a>
                </h5>
              </div>
              <span class="category">Event Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
