import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class LatestPost extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.latestpost
        
    return <div>
              <div className="case-studies-area pd-top-110">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-9">
                    <div className="section-title text-center">
                      <h2 className="title">{ data.sectiontitle } <span>{ data.sectiioncolor } </span></h2>
                      <p>{ data.subtitle }</p>
                    </div>
                  </div>
                </div>
                <div className="row custom-gutters-16 justify-content-center">
                  { data.items.map( ( item, i ) =>
                      <div key={ i } className="col-lg-4 col-md-6">
                        <div className="single-case-studies">
                          <div className="thumb">
                            <img src={ publicUrl+item.image } alt={ imgattr } />
                          </div>
                          <div className="details">
                            <h6><Link to={ item.url }>{ item.title }</Link></h6>
                            <p>{ item.content }</p>
                            <div className="admin">
                              <img src={ publicUrl+item.author_image } alt={ imgattr } />
                              <span>By: { item.author }</span>
                              <span className="float-right pt-1">{ item.date }</span>
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

export default LatestPost