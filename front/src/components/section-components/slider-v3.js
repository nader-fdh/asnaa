import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Slider_V3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.slider_v3

    return <div>
                <div className="header-area sbtl-header-area">
                  <div className="container">
                    <div className="banner-slider banner-slider-one">
                    { data.items.map( ( item, i )=>
                        <div key={ i } className="banner-slider-item">
                            <div className="row">
                              <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                                <div className="header-inner-details">
                                  <div className="header-inner">
                                    <h3 className="sub-title s-animate-1">{ item.title1 }</h3>
                                    <h1 className="title s-animate-2">{ item.title2 }<span>{ item.title_color }</span></h1>
                                    <p className="s-animate-3">There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration.</p>
                                    <div className="btn-wrapper desktop-left padding-top-20">
                                      <a className="btn btn-red s-animate-4" href="#">Read More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-5 offset-lg-1 col-md-6 hidden-sm">
                                <div className="banner-thumb-wrap">
                                  <div className="banner-thumb">
                                    <img className="header-inner-img" src={ publicUrl+item.image_url } alt={ imgattr } />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                     ) }
                     
                    </div>
                  </div>
                </div>
          </div>
        }
}

export default Slider_V3