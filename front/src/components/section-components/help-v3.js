import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Help_v3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let data = sectiondata.helpv3
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                  <div className="sbmc-tips-section bg-img-right-area mg-top-170" style={{backgroundImage: 'url(assets/img/bg/7h1.png)'}}>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-7 order-md-12">
                          <div className="img-with-video img-with-video-2">
                            <div className="img-wrap sbdm-image-gurd">
                              <img className="sbdm-image-1" src={publicUrl+"assets/img/others/11.png"} alt="img" />
                              <img className="sbdm-image-2" src={publicUrl+"assets/img/others/12.png"} alt="img" />
                              <img className="sbdm-image-3" src={ publicUrl+data.image } alt={ imgattr } />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 col-md-8 offset-xl-1 order-md-1 desktop-center-item">
                          <div className="sbtl-about mg-top-767-45">
                            <div className="section-title style-two">
                              <h2 className="title">{ data.title1 } <span>{ data.color }</span> {data.title2}</h2>
                              <p>{ data.description1 } <br /> { data.description2 } </p>
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

export default Help_v3