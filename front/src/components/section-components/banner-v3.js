import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.bannerv3

    return <div>
              <div className="header-area sbtc-header-area" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/h5banner.png)'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="header-inner-details">
                        <div className="header-inner">
                          <h3 className="sub-title wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0s">{ data.title }</h3>
                          <h1 className="title wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"><span>{ data.secitoncolor }</span> { data.subtitle }</h1>
                          <p className="wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">{ data.content1 }<br />{ data.content2 }</p>
                          <div className="btn-wrapper desktop-left padding-top-20 wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
                            <a href="#" className="btn btn-radius btn-red">{ data.btntxt }</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 hidden-sm">
                      <div className="header-thumb wow animated zoomIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <img className="header-inner-img" src={ publicUrl+data.bannerimage } alt={ imagealt } />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        }
}

export default BannerV3