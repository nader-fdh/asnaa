import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class BusinessSolution extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.business_soluation
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="sbbs-business-solution-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6 order-lg-12 desktop-center-item">
                  <div className="section-title style-two text-lg-left text-center">
                    <h2 className="title">{ data.sectiontitle }<span>{ data.section_color }</span> <br />{ data.section_sub_title }</h2>
                    <p>{ data.short_description }</p>
                    <div className="hover single-video-play">
                      <span>Play Video</span>
                      <a href={ data.video } className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 order-lg-1">
                  <img src={ publicUrl+data.image } alt={ imgattr } />
                </div>
              </div>
            </div>
          </div>
        </div>
    }
}

export default BusinessSolution