import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class About extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.about
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="about-area sbst-provide-security pd-top-100 pb-0" style={{backgroundImage: 'url(assets/img/bg/11.png)'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div className="img-with-video img-with-video-2">
                      <div className="img-wrap">
                        <img src={publicUrl+"assets/img/others/10.png"} alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1 desktop-center-item wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div className="sbtl-about">
                      <div className="section-title style-two">
                        <h2 className="title">{ data.sectiontitle } <br /> <span>{ data.color }</span></h2>
                        <p>{ data.short_description }</p>
                      </div>
                      <ul className="riyaqas-list-2 mb-0">
                      { data.items.map( ( item, i )=>
                        <li key={ i }>
                          <img src={ publicUrl+item.icon } alt={ imgattr } />
                        </li>
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

export default About