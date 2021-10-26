import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class BannerDomain extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.about
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="header-area h8-banner-area style-two" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/8h6.png)'}}>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-7 col-12">
                    <div className="header-inner-details">
                      <div className="header-inner">
                        <h3 className="sub-title style-two">Riyaqas ___</h3>
                        <h1 className="title">Website Domain &amp; Hosting Services</h1>
                        <h3 className="sub-title">Web hosting made EASY and Affordable.</h3>
                        <form className="sbh-main-search">
                          <div className="search-input float-left">
                            <input type="text" placeholder="Your Domain Name Here" />
                          </div>
                          <div className="single-select-area float-left">
                            <select className="select-2 single-select">
                              <option value={1}>.com</option>
                              <option value={2}>.org</option>
                              <option value={3}>.net</option>
                              <option value={3}>.xyz</option>
                              <option value={3}>.me</option>
                              <option value={3}>.biz</option>
                            </select>
                          </div>
                          <button type="submit">search</button>
                        </form>
                        <ul className="domain-price">
                          <li>Yearly _</li>
                          <li>.com <span>$9.99</span></li>
                          <li>.org <span>$9.99</span></li>
                          <li>.net <span>$9.99</span></li>
                          <li>.me <span>$9.99</span></li>
                          <li>.biz <span>$9.99</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 hidden-sm">
                    <div className="banner-animate-thumb banner-animate-thumb-2">
                      <div className="header-img-1 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0s">
                        <img src={publicUrl+"assets/img/banner/13.png"} alt="banner-img" />
                      </div>
                      <div className="header-img-2 wow animated fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src={publicUrl+"assets/img/banner/14.png"} alt="banner-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default BannerDomain