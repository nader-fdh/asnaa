import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
 let publicUrl = process.env.PUBLIC_URL+'/'

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.clientv3
        let anchor = '#'

    return <div>
            <div className="client-area text-center padding-top-40">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                    <div className="client-slider-2">
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