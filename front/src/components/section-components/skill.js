import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Skill extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.skills
        let anchor = '#'

    return <div>
                <div className="sbst-skill-area pd-top-120">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-5 col-lg-6 desktop-center-item">
                        <div
                          className="animated fadeInRight"
                          data-wow-duration="1s"
                          data-wow-delay="0.3s"
                        >
                          <div className="section-title style-two">
                            <h2 className="title">
                              { data.sectiontitle } <span> { data.sectiontitle_color }</span>
                            </h2>
                            <p>{ data.short_description }</p>
                          </div>
                          <div className="all-progress" id="progress-running">
                            { data.list_item.map( ( item, i )=>
                                <div key={i} className="progress-item">
                                  <span className="progress-heading">{ item.title }</span>
                                  <span className="progress-count">{ item.percentage }%</span>
                                  <div className="progress-bg">
                                    <div
                                      id={ i }
                                      className="progress-rate"
                                      data-value={ item.percentage }
                                    ></div>
                                  </div>
                              </div>
                             ) }
                            

                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div
                          className="shape-bg-image animated fadeInLeft"
                          data-wow-duration="1s"
                          data-wow-delay="0.3s"
                        >
                          <div className="thumb">
                            <img src={ publicUrl+data.image } alt="service" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
           </div>
    }
}

export default Skill