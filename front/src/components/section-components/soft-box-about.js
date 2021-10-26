import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Soft_Box_About extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.softboxabout
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+sectiondata.softboxabout.bgimg+')'
        }

    return <div>
            <div className="sbs-what-riyaqas pd-default-120 mg-top-105" style={inlineStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img src={publicUrl+data.imgurl} alt={imgattr} />
                        </div>
                        <div className="col-xl-5 col-lg-6 desktop-center-item">
                            <div className="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title style-two">
                                    <h2 className="title">{data.sectiontitle} <span>{data.sectiontitle_color}</span></h2>
                                    <p>{data.short_description}</p>
                                </div>
                                <div className="row">
                                {data.list_item.map( ( item, i ) => 
                                    <div key={i} className="col-md-6">
                                        <div className="riyaqas-check-list">
                                            <img src={publicUrl+item.icon} alt={imgattr}/>
                                            <span>{item.text}</span>
                                        </div>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Soft_Box_About