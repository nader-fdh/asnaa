import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class DataAnalytics extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.data_analytics
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="sbbs-data-analytics-area mg-top-45">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 desktop-center-item">
                    <div className="desktop-center-area">
                      <div className="section-title style-two text-lg-left text-center">
                        <h2 className="title">{ data.sectiontitle }   

                        <span>{ data.sectionsubtitle }</span></h2>
                        <p>{ data.short_description }</p>
                      </div>
                      <div className="row">
                        <div className="col-lg-9">
                        { data.items.map( ( item, i )=> 
                          <div key={ i } className="riyaqas-check-list media">
                            <img className="media-left" src={ publicUrl+item.icon } alt="check" />
                            <span>{ item.title }</span>
                          </div>
                         )}

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <img src={ publicUrl+data.image } alt={imgattr} />
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default DataAnalytics