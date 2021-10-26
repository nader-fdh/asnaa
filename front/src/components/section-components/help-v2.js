import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Help_v2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let data = sectiondata.helpv2
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                  <div className="sbtl-better-service pd-top-120">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-5 order-md-12 col-md-6 sbimg-center-align wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                          <div className="img-with-video img-with-video-2">
                            <div className="img-wrap">
                              <img src={ publicUrl+data.image } alt={ imgattr } />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-7 col-md-6 mt-4 mt-md-0 desktop-center-item order-md-1">
                          <div className="sbtl-about wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="section-title style-two">
                              <h2 className="title">{ data.sectiontitle } <br /> <span>{ data.color }</span></h2>
                            </div>
                            <ul className="riyaqas-list-3 mb-0">
                            { data.items.map( ( item, i ) =>

                              <li key={ i }>{ item.content }</li>

                             ) }

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
     }
}

export default Help_v2