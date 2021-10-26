import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Marketing extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.markekingv2

    return <div>
            <div className="provide-security pd-top-170">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-md-6 offset-xl-1 sbimg-center-align wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div className="img-wrap">
                      <img src={ publicUrl+data.image } alt={ imgattr } />
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6 offset-xl-1 mt-4 mt-md-0 desktop-center-item wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div>
                      <div className="section-title style-two mb-0">
                        <h2 className="title">{ data.title } <span>{ data.color }</span> { data.subtitle }</h2>
                        <p>{ data.content }</p>
                        <div className="row">
                          <div className="col-xl-9">
                          { data.items.map( ( item, i ) =>
                            <div key={ i } className={"riyaqas-check-list media " +item.mg}>
                              <img className="media-left" src={ publicUrl+item.icon } alt={ imgattr } />
                              <span>{ item.content }</span>
                            </div>
                           ) }
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default Marketing