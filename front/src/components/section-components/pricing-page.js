import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Team extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className={ "sba-pricing-area "+customclass }>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-9">
                    <div className="section-title text-center">
                      <h2 className="title">
                        { sectiondata.pricingtable.sectiontitle } <span>{sectiondata.pricingtable.sectiontitle_color}</span>
                      </h2>
                      <p>
                       {sectiondata.teampage.short_description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row custom-gutters-20">
                    {sectiondata.pricingtable.tables.map( ( item, i ) => 
                        <div key={i} className="col-xl-3 col-sm-6">
                            <div className="single-pricing text-center">
                                <h6 className="title">{item.title}</h6>
                                <div className="thumb">
                                    <img src={publicUrl+item.icon} alt={imgattr} />
                                </div>
                                <h3 className="price">{item.price} <span>{item.duration}</span></h3>
                                <ul>
                                {item.features.map( ( feature, i  ) =>
                                 <li key={i}>{feature}</li>
                                )}
                                </ul>
                                <a className="btn btn-white btn-rounded" href={item.url}>Get Start</a>
                            </div>
                        </div>
                    )}

                </div>
              </div>
            </div>
            <div className="pricing-page-area pd-top-112">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6">
                    <div className="section-title text-center">
                      <h2 className="title">
                        { sectiondata.pricingtable.sectiontitle } <span>{sectiondata.pricingtable.sectiontitle_color}</span>
                      </h2>
                      <p>
                       {sectiondata.teampage.short_description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters justify-content-center">
                 {sectiondata.pricingtablev2.tables.map( ( item, i ) => 
                    <div key={ i } className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="single-pricing text-center">
                        <h6 className="title">{item.title}</h6>
                        <div className="thumb">
                          <img src={publicUrl+item.icon} alt={imgattr} />
                        </div>
                        <h3 className="price">
                          { item.price } <span>{ item.duration }</span>
                        </h3>
                        <ul>
                           {item.features.map( ( feature, i  ) =>
                                 <li key={i}>{feature}</li>
                            )}
                        </ul>
                        <a className="btn btn-white btn-rounded" href={item.url}>Get Start</a>
                      </div>
                    </div>
                   )}
                </div>
              </div>
            </div>
        </div>
    }
}

export default Team