import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
 let publicUrl = process.env.PUBLIC_URL+'/'

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.clientv2
        let anchor = '#'

    return <div>
            <div className="client-area text-center padding-top-40">
              <div className="container">
                <h3 className="client-slider-title">{ data.sectiontitle } <span>{ data.sectiontitle_color }</span> { data.sectiontitle2 }</h3>
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="client-slider-2 style-two">
                      { data.list_item.map( ( item, i ) =>
                          <div key={ i } className="item">
                          <a href={ item.url } className="thumb">
                            <img src={ publicUrl+item.image } alt={ imgattr } />
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