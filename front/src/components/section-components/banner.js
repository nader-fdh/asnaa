import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="header-area sbst-banner-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 offset-xl-1">
                    <div className="header-inner-details">
                      <div className="header-inner">
                        <h1
                          className="title wow animated fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                          dangerouslySetInnerHTML={{__html: data.title}}
                        >
                          
                        </h1>
                        <p
                          className=" wow animated fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0.3s"
                          dangerouslySetInnerHTML={{__html: data.subtitle}}
                        >
                          
                        </p>
                        <div
                          className="btn-wrapper desktop-left padding-top-20 wow animated fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0.6s"
                        >
                          <a href="#" className="btn btn-radius btn-green">
                            { data.btn_text }
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 offset-xl-1 hidden-sm">
                    <div className="banner-animate-thumb">
                      <div
                        className="header-img-1 wow animated fadeInRight"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <img  src={ publicUrl+data.image_url1 } alt={ imagealt } />
                      </div>
                      <div
                        className="header-img-2 wow animated fadeInDown"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                      >
                        <img  src={ publicUrl+data.image_url2 } alt={ imagealt } />
                      </div>
                      <div
                        className="header-img-3 wow animated fadeInDown"
                        data-wow-duration="1s"
                        data-wow-delay="0.8s"
                      >
                        <img  src={ publicUrl+data.image_url3 } alt={ imagealt } />
                      </div>
                      <div
                        className="header-img-4 wow animated fadeInDown"
                        data-wow-duration="1s"
                        data-wow-delay="1.0s"
                      >
                       <img  src={ publicUrl+data.image_url4 } alt={ imagealt } />
                      </div>
                      <div
                        className="header-img-5 wow animated fadeInDown"
                        data-wow-duration="1s"
                        data-wow-delay="1.3s"
                      >
                        <img  src={ publicUrl+data.image_url5 } alt={ imagealt } />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
}

export default Banner