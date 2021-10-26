import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Soft_Box extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.softbox


    return <div>
            <div className="pd-top-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-md-6 order-lg-12 pb-4 pb-md-0">
                    <div className="mask-bg-wrap mask-bg-img-2">
                      <div className="thumb">
                        <img src={ publicUrl+data.image } alt={ imgattr } />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6 order-lg-1 align-self-center">
                    <div className="section-title style-two mb-0">
                      <h2 className="title"><span>{ data.sectiontitle}</span> { data.sectiontitle_color }</h2>
                      <p>{ data.content }</p>
                      <a href={ data.btn_url } >{ data.btn_txt } <img src={publicUrl+"assets/img/right-arrow.png"} alt="arrow" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    }
}

export default Soft_Box