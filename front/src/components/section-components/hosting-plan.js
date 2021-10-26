import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class Hosting extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.about
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
              <div className="sba-pricing-area pd-top-110">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-9">
                      <div className="section-title text-center">
                        <h2 className="title">Our <span>Hosting</span> plan</h2>
                        <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests. Our support team will get assistance from AI-powered suggestions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-area text-center">
                    <ul className="nav nav-tabs sb-pricing-tabs">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tabs_1">Shared Hosting</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_2">Reseller Hosting</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_3">VPS Hosting</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_4">Dedicated Hosting</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_5">Cloud Hosting</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tabs_1">
                      <div className="row custom-gutters-20">
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">BASIC</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/5.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.44 <span>/Month</span></h3>
                              <del>$2.88</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center single-pricing-active">
                            <h6 className="title">STANDARD</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/6.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.60 <span>/Month</span></h3>
                              <del>$3.20</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">PREMIUM</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/7.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$2.88 <span>/Month</span></h3>
                              <del>$5.76</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">BUSINESS</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/8.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$3.20 <span>/Month</span></h3>
                              <del>$6.40</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs_2">
                      <div className="row custom-gutters-20">
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">INDIVIDUAL</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/5.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.20 <span>/Month</span></h3>
                              <del>$2.40</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center single-pricing-active">
                            <h6 className="title">SMALL BUSINESS</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/6.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.50 <span>/Month</span></h3>
                              <del>$3.00</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">MEDIUM COMPANY</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/7.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$2.40 <span>/Month</span></h3>
                              <del>$4.80</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">ENTERPRISE</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/8.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$3.20 <span>/Month</span></h3>
                              <del>$6.40</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs_3">
                      <div className="row custom-gutters-20">
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">BASIC</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/5.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.44 <span>/Month</span></h3>
                              <del>$2.88</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center single-pricing-active">
                            <h6 className="title">STANDARD</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/6.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.60 <span>/Month</span></h3>
                              <del>$3.20</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">PREMIUM</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/7.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$2.88 <span>/Month</span></h3>
                              <del>$5.76</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">BUSINESS</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/8.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$3.20 <span>/Month</span></h3>
                              <del>$6.40</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs_4">
                      <div className="row custom-gutters-20">
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">INDIVIDUAL</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/5.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.44 <span>/Month</span></h3>
                              <del>$2.88</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center single-pricing-active">
                            <h6 className="title">SMALL BUSINESS</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/6.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.60 <span>/Month</span></h3>
                              <del>$3.20</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">MEDIUM COMPANY</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/7.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$2.88 <span>/Month</span></h3>
                              <del>$5.76</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">ENTERPRISE</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/8.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$3.20 <span>/Month</span></h3>
                              <del>$6.40</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs_5">
                      <div className="row custom-gutters-20">
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">BASIC</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/5.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.44 <span>/Month</span></h3>
                              <del>$2.88</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center single-pricing-active">
                            <h6 className="title">STANDARD</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/6.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$1.60 <span>/Month</span></h3>
                              <del>$3.20</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">PREMIUM</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/7.png" }alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$2.88 <span>/Month</span></h3>
                              <del>$5.76</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <div className="single-pricing style-two text-center">
                            <h6 className="title">BUSINESS</h6>
                            <div className="thumb">
                              <img src={publicUrl+"assets/img/price/8.png"} alt="pricing" />
                            </div>
                            <div className="amount">
                              <h3 className="price">$3.20 <span>/Month</span></h3>
                              <del>$6.40</del>
                              <p>Save 50% on 1st Year</p>
                            </div>
                            <ul>
                              <li>1000 Messages per month</li>
                              <li>2 GB file storage</li>
                              <li>20 Projects per month</li>
                              <li>Premium support</li>
                            </ul>
                            <a className="btn btn-white btn-rounded" href="#">Get Start</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    }
}

export default Hosting