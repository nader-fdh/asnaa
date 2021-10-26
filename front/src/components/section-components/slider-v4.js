import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Slider_V4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.slider_v4

    return <div>
                <div className="header-area sbmc-header-area">
                  <div className="container">
                    <div className="banner-slider banner-slider-one style-three">
                     { data.items.map( ( item, i )=>
                          <div key={ i } className="banner-slider-item">
                            <div className="row">
                              <div className="col-md-6 offset-xl-1">
                                <div className="header-inner-details">
                                  <div className="header-inner">
                                    <h1 className="title s-animate-1">{ item.title1 } <span> { item.title_color }</span></h1>
                                    <p className="s-animate-2">{ item.description }<br /> { item.description2 }</p>
                                    <div className="btn-wrapper desktop-left padding-top-20">
                                      <a className="btn btn-red s-animate-3" href={ item.url }>{ item.btntxt }</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-5 col-md-6 hidden-sm">
                                <div className="banner-thumb-wrap">
                                  <div className="banner-thumb">
                                    <img className="header-inner-img" src={publicUrl+"assets/img/banner/9.png"} alt="banner-img" />
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

export default Slider_V4