import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class GetInTouch extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.getintouch
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
        <div className="more-question-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="section-title text-center margin-bottom-90">
                  <h2 className="title">{ data.sectiontitle }</h2>
                  <p>{ data.subtitle }</p>
                </div>
              </div>
            </div>
            <div className="row custom-gutters-16 justify-content-center">
              { data.items.map( ( item, k ) =>
                  <div key={k} className="col-xl-3 col-md-4 col-sm-6">
                    <div className="single-service text-center">
                      <img src={publicUrl+"assets/img/icons/c1.png" }alt="contact" />
                      <h6>{ item.title }</h6>
                      { item.features.map( ( features, i ) =>
                          <p key={ i } className="mb-0">{ features }</p>
                       ) }
                    </div>
                  </div>
               ) }
              

            </div>
          </div>
        </div>
         </div>
    }
}

export default GetInTouch