import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import { Link } from 'react-router-dom';

class Services_V7 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let data = sectiondata.servicesv7
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                  <div className="sbtc-service-area pd-top-112">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-xl-6">
                            <div className="section-title text-center">
                              <h2 className="title">{ data.title1 } <span>{ data.title2 }</span></h2>
                              <p>{ data.description }</p>
                            </div>
                          </div>
                        </div>
                        <div className="row custom-gutters-16 justify-content-center">
                        { data.items.map( ( item, i ) =>
                            <div key={ i } className="col-lg-4 col-sm-6">
                              <div className="single-service-2 style-three">
                                <div className="thumb ml-0">
                                  <img src={ publicUrl+item.icon } alt={ imgattr } />
                                </div>
                                <h6>{ item.title }</h6>
                                <p> { item.content } </p>
                                <Link to={ item.url } className="arrow" >View Details <i className="ti-arrow-right" /></Link>
                              </div>
                            </div>
                         ) }

                        </div>
                      </div>
                    </div>
              </div>
     }
}

export default Services_V7