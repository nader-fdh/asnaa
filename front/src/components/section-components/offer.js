import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Offer extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.offer
        let anchor = '#'

    return <div>
            <div className="sbst-offer-area pd-top-100">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-10">
                    <div className="section-title text-center">
                      <h2
                        className="title wow animated fadeInUp"
                        data-wow-duration="0.6s"
                        data-wow-delay="0.1s"
                      >
                        { data.sectiontitle } <span>{data.sectiontitle_color} </span>
                      </h2>
                      <p
                        className="wow animated fadeInUp"
                        data-wow-duration="0.6s"
                        data-wow-delay="0.2s"
                          dangerouslySetInnerHTML={{__html: data.short_description}}
                      >
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row custom-gutters-28 justify-content-center">

                { data.list_item.map( ( item, i )=>

                   <div key={ i } className="col-xl-3 col-lg-4 col-sm-6">
                    <div
                      className="single-offer wow animated fadeInUp"
                      data-wow-duration="0.6s"
                      data-wow-delay="0.1s"
                    >
                      <div className="media">
                        <img src={ publicUrl+item.icon } alt="offer" />
                        <div className="media-body align-self-center">
                          <h6>{ item.title }</h6>
                        </div>
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

export default Offer