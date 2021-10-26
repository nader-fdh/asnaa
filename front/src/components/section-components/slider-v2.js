import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Slider_V2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = 'image';
    let data = sectiondata.slider_v2;

    return (
      <div>
        <div className="header-area sba-header-area">
          <div className="container">
            <div className="banner-slider banner-slider-one style-two">
              {data.items.map((item, i) => (
                <div key={i} className="banner-slider-item">
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                      <div className="header-inner-details">
                        <div className="header-inner">
                          <h5 style={{ fontSize: '45px' }} className="title s-animate-1">
                            {item.title1} <span>{item.title_color}</span> {item.title2}
                          </h5>
                          <p className="s-animate-2">{parse(item.description)}</p>
                          <div className="btn-wrapper desktop-left padding-top-20">
                            {/* <a
                              className="btn-appstore s-animate-3"
                              href={item.button1_url}
                            >
                              <img
                                src={publicUrl + item.button1_image}
                                alt={imgattr}
                              />
                            </a> */}
                            <a className="btn-playstore s-animate-4" href={item.button1_url}>
                              <img src={publicUrl + item.button2_image} alt={imgattr} />
                            </a>
                          </div>
                          {/* <div className="hover s-animate-5">
                            <a
                              href={item.video_url}
                              className="video-play-btn mfp-iframe"
                            >
                              <i className="fa fa-play"></i>
                            </a>
                            <span>{item.video_text}</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 hidden-sm">
                      <div className="banner-thumb-wrap">
                        <div className="banner-thumb">
                          <img className="header-inner-img" src={publicUrl + item.image_url1} alt={imgattr} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider_V2;
