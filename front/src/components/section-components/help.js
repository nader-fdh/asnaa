import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Help extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let data = sectiondata.help
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                  <div className="sbtc-success-section sbst-provide-security pd-top-80" style={{backgroundImage: 'url(assets/img/bg/9.png)'}}>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="img-with-video img-with-video-2">
                            <div className="img-wrap">
                              <img src={publicUrl+"assets/img/startup/why-choose/1.png" }alt="img" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 desktop-center-item">
                          <div className="section-title style-two">
                            <h2 className="title">{ data.sectiontitle }<br /> { data.subtitle } <span>{ data.sectioncolor }</span></h2>
                            <p>{ data.content1 }</p>
                            <p>{ data.content2 }</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
     }
}

export default Help