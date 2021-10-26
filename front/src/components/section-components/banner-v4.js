import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.bannerv4
        let ancor = "#"

    return <div>
             <div className="header-area h8-banner-area h8-banner-area-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                      <div className="header-inner-details">
                        <div className="header-inner">
                          <h1 className="title wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s">{ data.title } <span>{ data.secitoncolor }</span></h1>
                          <p className=" wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">{ data.content1 } <br /> { data.content2 }</p>
                          <div className="btn-wrapper desktop-left padding-top-20 wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                            <a href={ ancor } className="btn btn-radius btn-red-border mr-2 mb-2">{ data.btntxt1 }</a>
                            <a href={ ancor } className="btn btn-radius btn-red mb-2">{ data.btntxt2 }</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 hidden-sm">
                      <div className="banner-animate-thumb banner-animate-thumb-2">
                        <div className="header-img-1 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0s">
                          <img src={publicUrl+"assets/img/banner/11.png"} alt={ imagealt } />
                        </div>
                        <div className="header-img-2 wow animated fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                          <img src={ publicUrl+data.bannerimage } alt={ imagealt } />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        }
}

export default BannerV4