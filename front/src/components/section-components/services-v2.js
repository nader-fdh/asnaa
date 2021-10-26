import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Services_V2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let data = sectiondata.servicesv2
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                <div className="service-area sbbs-service-area pd-top-112">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6">
                        <div className="section-title text-center">
                          <h2 className="title"><span>{ data.sectiontitle }</span> <br />{ data.sectiontitle_color }</h2>
                          <p>{ data.short_description }</p>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center no-gutters">
                        { data.items.map( ( item, i )=>
                            <div key={ i } className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-service-left">
                                  <div className="media">
                                    <div className="thumb media-left">
                                      <img src={ publicUrl+item.icon } alt={imgattr} />    
                                    </div>
                                    <div className="media-body">
                                      <h6>{ item.title }</h6>
                                      <p>{ item.content }</p>
                                      <a href={ item.url }>View Details<i className="la la-long-arrow-right" /></a>
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

export default Services_V2