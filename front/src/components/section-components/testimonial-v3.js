import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Testimonial_V3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.testimonial_v2
        let anchor = '#'

    return <div>
              <div className="sbst-testimonial-area mg-top-110">
                  <div className="container">
                    <div className="testimonial-slider2-bg">
                      <div className="row justify-content-center">
                        <div className="col-xl-10">
                          <div className="testimonial-slider-2">
                          { data.items.map( ( item, i )=>

                            <div className="item" key={i} >
                              <div className="media text-center">
                                <div className="media-left">
                                  <img
                                    src={ publicUrl+item.clientimg }
                                    alt="client"
                                  />
                                </div>
                                <div className="media-body">
                                  <p>{ item.content }</p>
                                  <h6>{ item.client }</h6>
                                  <span>{ item.designation }</span>
                                </div>
                              </div>
                            </div>

                           ) }

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
         </div>
    }
}

export default Testimonial_V3