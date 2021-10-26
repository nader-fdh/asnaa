import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Services_V3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let data = sectiondata.servicesv3
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                  <div className="service-area sbtc-service-area pd-top-120">
                    <div className="container">
                      <div className="row custom-gutters-16 justify-content-center">
                       { data.items.map( ( item, i ) =>
                            <div key={ i } className="col-xl-3 col-lg-6 col-sm-6">
                            <div className="single-service-2 style-two text-center">
                              <div className="thumb">
                                <img src={ publicUrl+item.icon } alt={ imgattr } />
                              </div>
                              <h6>{ item.title }</h6>
                              <p>{ item.content }</p>
                            </div>
                          </div>
                        ) }
                      </div>
                    </div>
                  </div>
              </div>
     }
}

export default Services_V3