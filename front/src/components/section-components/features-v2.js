import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Featuresv2 extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.featuresv2

    return <div>
            <div className="inner-area pd-top-120">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-md-6 order-md-12 mb-md-0 mb-4">
                    <div className="sb-animate-img">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/bg/8h3.png"} alt="img" />
                      </div>
                      <div className="thumb-2">
                        <img src={ publicUrl+data.image } alt={ imgattr } />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6 order-md-1 align-self-center">
                    <div className="section-title style-two text-md-left text-center mb-0">
                      <h2 className="title">{ data.title } <span>{ data.color }</span></h2>
                      <p>{ data.content1 }</p>
                      <p>{ data.content2 }</p>
                      <a className="read-more" href={ data.btn_url }>{ data.btn_text } <i className="la la-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default Featuresv2

