import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Soft_Box_v2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.softboxv2


    return <div>
            <div className="sbs-what-riyaqas pd-default-120 mg-top-105" style={{backgroundImage: 'url(assets/img/bg/1h1.png)'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 desktop-center-item">
                    <img src={ publicUrl+data.image } alt={ imgattr } />
                  </div>
                  <div className="col-lg-6 desktop-center-item">
                    <div className="desktop-center-area">
                      <div className="section-title style-two">
                        <h2 className="title">{ data.title1 } <span>{ data.color }</span>{ data.title2 }  </h2>
                        <p>{ data.content1 } <br /> { data.content2 }</p>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <ul>
                            { data.items.map( ( item, i )=>
                              <li key={ i } className="riyaqas-check-list style-two">
                                <span>Point of Sale</span>
                              </li>
                             ) }
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <ul>
                            { data.items.map( ( item, i )=>
                              <li key={ i } className="riyaqas-check-list style-two">
                                <span>Point of Sale</span>
                              </li>
                             ) }
                          </ul>
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

export default Soft_Box_v2