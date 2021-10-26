import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Talented_People extends Component{

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'

    return <div>
            <div className="sbs-talented-people mg-top-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 desktop-center-item">
                            <div className="desktop-center-area">
                                <div className="section-title style-three">
                                    <h2 className="title">{sectiondata.talentedpeople.sectiontitle}</h2>
                                    <p>{sectiondata.talentedpeople.short_description}</p>
                                </div>
                                <div className="talented-pepole-list">
                                    <ul>
                                    {sectiondata.talentedpeople.items.map( ( item, i ) => 
                                        <li key={i}>
                                            <h3 className="count-num">{item.number}</h3>
                                            <span>{item.title}</span>
                                        </li>
                                    )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="world-map-wrap">
                                <img src={publicUrl+sectiondata.talentedpeople.image} alt={imgattr}/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    }
}

export default Talented_People