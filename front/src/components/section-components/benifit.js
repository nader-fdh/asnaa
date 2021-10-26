import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class Benifit extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.about
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
              <div className="benefits-list pd-top-110">
                <div className="container">
                  <div className="section-title text-md-center">
                    <h3 className="client-slider-title mb-0">All plans also include these benefits:</h3>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="riyaqas-check-list-wrap">
                        <div className="riyaqas-check-list media">
                          <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                          <span>Unmetered bandwidth</span>
                        </div>
                        <div className="riyaqas-check-list media">
                          <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                          <span>Free website builder</span>
                        </div>
                        <div className="riyaqas-check-list media">
                          <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                          <span>50 Positive SSL certificates</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="riyaqas-check-list-wrap">
                        <div className="riyaqas-check-list media">
                          <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                          <span>Free .website domain name and Privacy protection</span>
                        </div>
                        <div className="riyaqas-check-list media">
                          <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                          <span>30-day money-back guarantee</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9">
                      <div className="border-bottom-dashed pd-bottom-100" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
    }
}

export default Benifit