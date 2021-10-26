import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Testimonial_V4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.testimonial_v2
        let anchor = '#'

    return <div>
              <div className="client-area mg-top-100 bg-gray pd-top-110 pd-bottom-120">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9">
                      <div className="section-title style-two text-md-center">
                        <h2 className="title">Our valuable <span>Client</span></h2>
                        <p>Riyaqas One of the best Software Development company. Riyaqas is at the forefront as the most <br /> innovative web development company. Our cost efficient and structured teamwork.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <div className="client-slider-2">
                        <div className="item">
                          <a href="#" className="thumb">
                            <img src="assets/img/startup/client/1.png" alt="client" />
                          </a>
                        </div>
                        <div className="item">
                          <a href="#" className="thumb">
                            <img src="assets/img/startup/client/2.png" alt="client" />
                          </a>
                        </div>
                        <div className="item">
                          <a href="#" className="thumb">
                            <img src="assets/img/startup/client/3.png" alt="client" />
                          </a>
                        </div>
                        <div className="item">
                          <a href="#" className="thumb">
                            <img src="assets/img/startup/client/4.png" alt="client" />
                          </a>
                        </div>
                        <div className="item">
                          <a href="#" className="thumb">
                            <img src="assets/img/startup/client/5.png" alt="client" />
                          </a>
                        </div>
                        <div className="item">
                          <a href="#" className="thumb">
                            <img src="assets/img/startup/client/1.png" alt="client" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         </div>
    }
}

export default Testimonial_V4