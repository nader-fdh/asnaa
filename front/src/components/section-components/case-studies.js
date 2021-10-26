import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class CaseStudies extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.casestudy
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="case-studies-area pd-top-110">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-9">
                    <div className="section-title text-center">
                      <h2 className="title">{ data.title } <span>{ data.color }</span> { data.title2 }</h2>
                      <p>{ data.content }</p>
                    </div>
                  </div>
                </div>
                <div className="row custom-gutters-16 justify-content-center">
                  { data.items.map( ( item,i )=>
                      <div key={ i } className="col-lg-4 col-md-6">
                      <div className="single-case-studies">
                        <div className="thumb">
                          <img src={ publicUrl+item.image } alt={ imgattr } />
                        </div>
                        <div className="details">
                          <h6><a href="{ item.url }">{ item.content }</a></h6>
                        </div>
                      </div>
                    </div>
                   ) }
                  
                </div>
              </div>
            </div>
        </div>
    }
}

export default CaseStudies