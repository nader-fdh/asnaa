import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
 let publicUrl = process.env.PUBLIC_URL+'/'

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.client
        let anchor = '#'

    return <div>
            <div className="sbst-client-area pd-top-112">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-10">
                    <div className="section-title text-center">
                      <h2 className="title">
                        { data.sectiontitle } <span> { data.sectiontitle_color } </span>
                      </h2>
                      <p dangerouslySetInnerHTML={{__html: data.short_description}}></p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="client-slider-2">
                      { data.list_item.map( ( item, i )=>
                          <div key={ i } className="client-slider-2-item">
                            <a href="#" className="thumb">
                              <img src={ publicUrl+item.image } alt="client" />
                            </a>
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

export default Client