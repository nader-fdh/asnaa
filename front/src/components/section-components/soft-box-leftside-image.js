import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Soft_Box_Leftside_Image extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.softboxleftsideimage

    return <div>
            <div className="leftside-image-area service-area sbs-business-tool pd-bottom-120 mg-top-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-7 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <img src={publicUrl+"assets/img/business-tool/1.png"} alt="img"/>
                        </div>
                        <div className="col-xl-5 col-lg-6 desktop-center-item">
                            <div className="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title style-two">
                                    <h2 className="title">{data.sectiontitle_part1} <span>{data.sectiontitle_color}</span> {data.sectiontitle_part2}</h2>
                                    <p>{data.short_description}</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9">
                                    {data.list_item.map( ( item, i ) => 
                                        <div key={i} className="riyaqas-check-list media">
                                            <img className="media-left" src={publicUrl+item.icon} alt={imgattr}/>
                                            <span>{item.text}</span>
                                        </div>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Soft_Box_Leftside_Image