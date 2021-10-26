import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class SoftwareStore extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let data = sectiondata.softwarestore
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                  <div className="software-store-area mg-top-100 ">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <div className="section-title text-center">
                            <h2 className="title">{ data.title1 }<span>{ data.title2 }</span></h2>
                            <p>{ data.description }</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-after pd-top-120 pd-bottom-90 jarallax" style={{backgroundImage: 'url(assets/img/bg/8h2.png)'}}>   
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-xl-11">
                            <ul className="software-store-wrap">
                            { data.items.map( ( item, i ) =>
                              <li key={ i } >
                                <a href={ item.url } className="single-software-store text-center">
                                  <div className="thumb">
                                    <img src={ publicUrl+item.icon } alt={ imgattr } />
                                  </div>
                                  <h4>{ item.title }</h4>
                                </a>
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

export default SoftwareStore