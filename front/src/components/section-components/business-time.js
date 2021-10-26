import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Marketing extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.businesstime
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="business-time pd-top-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-md-6 sbimg-center-align">
                  <div className="img-with-video img-with-video-2 margin-bottom-40">
                    <div className="img-wrap sbdm-image-gurd2">
                      <img className="sbdm-image-1" src={ publicUrl+data.image } alt={ imgattr } />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6 offset-xl-1 desktop-center-item">
                  <div className="mg-top-767-45">
                    <div className="section-title style-two">
                      <h2 className="title">{ data.title } <span>{ data.color }</span> { data.subtitle }</h2>
                      <p>{ data.content1 } <br /> { data.content2 }</p>
                    </div>

                    { data.items.map( ( item, i )=>
                        <div key={ i } className="riyaqas-check-list media">
                        <img className="media-left" src={ publicUrl+item.icon } alt="check" />
                        <span>{ item.content }</span>
                      </div>

                     ) }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
}

export default Marketing