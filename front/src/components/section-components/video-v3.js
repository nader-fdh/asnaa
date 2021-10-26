import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Video_V3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.whyChooseUs
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+sectiondata.whyChooseUs.bgimg+')'
        }
        
    return <div>
            <div className="sbst-provide-security mg-top-100 mg-bottom-120" style={inlineStyle} >
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-6">
                    <div
                      className="img-with-video img-with-video-2 wow animated fadeInRight"
                      data-wow-duration="1s"
                      data-wow-delay="0.3s"
                    >
                      <div className="img-wrap">
                        <img src={publicUrl+data.videoimage} alt="video" />
                        <div className="hover">
                          <a
                            href={data.videourl}
                            className="video-play-btn mfp-iframe"
                          >
                            <img src={publicUrl+"assets/img/we-provide/3.png" }alt="video" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 desktop-center-item">
                    <div
                      className="wow animated fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay="0.3s"
                    >
                      <div className="section-title style-two">
                        <h2 className="title">
                          { data.sectiontitle } <span> { data.sectiontitle_color }</span>
                        </h2>
                        <p>{ data.short_description }</p>
                      </div>
                      <div className="row">
                        {data.list_item.map( ( item, i ) => 
                                <div key={i} className="col-md-6">
                                    <div className="riyaqas-check-list">
                                        <img src={publicUrl+item.icon} alt={imgattr}/>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    
    }

}

export default Video_V3