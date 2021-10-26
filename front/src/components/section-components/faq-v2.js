import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class Faq extends Component {

    render() {

        let imgattr = 'image'
        let data = sectiondata.faq
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="faq-area pd-top-105">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-11">
                    <div className="section-title style-five text-center">
                      <h2 className="title">Quick <span>Navigation</span></h2>
                      <p className="sub-title"><span>Can’t find answer?</span><br /> Call us at +880 1122 333 444 or email us info@riyaqas.com</p>
                    </div>
                    <div className="accordion style-two accordion-h-five" id="accordion">
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is your refund policy ?</button>
                          </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body">
                            Riyaqas One of the best Softwire Development company. Riyaqas is at the standard industry's forefront as the most innovative development company. Riyaqas One of the best Softwire Development company. Riyaqas is at the forefront as the most innovative web development company.
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">How many elements in Riyaqas?</button>
                          </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div className="card-body">
                            Riyaqas One of the best Softwire Development company. Riyaqas is at the standard industry's forefront as the most innovative development company. Riyaqas One of the best Softwire Development company. Riyaqas is at the forefront as the most innovative web development company.
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">How long does delivery take?</button>
                          </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                          <div className="card-body">
                            Riyaqas One of the best Softwire Development company. Riyaqas is at the standard industry's forefront as the most innovative development company. Riyaqas One of the best Softwire Development company. Riyaqas is at the forefront as the most innovative web development company.
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingFour">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">How is the payment methode?</button>
                          </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                          <div className="card-body">
                            Riyaqas One of the best Softwire Development company. Riyaqas is at the standard industry's forefront as the most innovative development company. Riyaqas One of the best Softwire Development company. Riyaqas is at the forefront as the most innovative web development company.
                          </div>
                        </div>
                      </div>
                      {/* single accordion end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
    }
}

export default Faq