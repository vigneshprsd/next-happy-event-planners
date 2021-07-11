import React from 'react'
import img1 from "../public/images/blog/blog-01.jpg"
import img2 from "../public/images/blog/blog-02.jpg"
import img3 from "../public/images/blog/blog-03.jpg"
import img4 from "../public/images/blog/blog-04.jpg"
import img5 from "../public/images/blog/blog-05.jpg"
import img6 from "../public/images/blog/blog-06.jpg"
import Image from 'next/image'


const AllService = () => {
    return (
        <div class="ttm-row service-section3 clearfix">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-12">
                    <div class=" section-title clearfix">
                        <h4>GREAT PROVIDE PLANWEY</h4>
                        <h2 class="title">Provide Best Services</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="featured-imagebox static-title mb-45">
                        <div class="featured-thumbnail">
                            <Image class="img-fluid" src={img1} alt=""/>
                        </div>
                        <div class="featured-content">
                            <div class="featured-title">
                                <h5><a href="#"> Wedding</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="featured-imagebox static-title mb-45">
                        <div class="featured-thumbnail">
                            <Image class="img-fluid" src={img2} alt=""/>
                        </div>
                        <div class="featured-content">
                            <div class="featured-title">
                                <h5><a href="#">Private Party</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="featured-imagebox static-title mb-45">
                        <div class="featured-thumbnail">
                            <Image class="img-fluid" src={img3} alt=""/>
                        </div>
                        <div class="featured-content">
                            <div class="featured-title">
                                <h5><a href="#">Corporate Party</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="featured-imagebox static-title mb-45">
                        <div class="featured-thumbnail">
                            <Image class="img-fluid" src={img4} alt=""/>
                        </div>
                        <div class="featured-content">
                            <div class="featured-title">
                                <h5><a href="#"> Wedding</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="featured-imagebox static-title mb-45">
                        <div class="featured-thumbnail">
                            <Image class="img-fluid" src={img5} alt=""/>
                        </div>
                        <div class="featured-content">
                            <div class="featured-title">
                                <h5><a href="#">Private Party</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="featured-imagebox static-title mb-45">
                        <div class="featured-thumbnail">
                            <Image class="img-fluid" src={img6} alt=""/>
                        </div>
                        <div class="featured-content">
                            <div class="featured-title">
                                <h5><a href="#">Corporate Party</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AllService
