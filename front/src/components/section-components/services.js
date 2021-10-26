import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Services_V1 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let customclass = this.props.customclass ? this.props.customclass : ''
   
        return <div>
                <div className={"service-area " +customclass}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-10">
                                <div className="section-title text-center margin-bottom-90">
                                <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">{sectiondata.services.sectiontitle} <span>{sectiondata.services.sectiontitle_color}</span>{sectiondata.services.sectiontitle_2}</h2>
                                <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">{sectiondata.services.short_description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row custom-gutters-16">
                        {sectiondata.services.items.map( ( item, i ) => 
                            <div key={i} className="col-xl-3 col-md-6 col-sm-6">
                                <div className="single-service wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                                    <img src={publicUrl+item.icon} alt={imgattr} />
                                    <h6><a href={anchor}>{item.title}</a></h6>
                                    <p>{item.content}</p>
                                    <div className="read-more">
                                        <a href={item.url}><img src={publicUrl+'assets/img/service/arrow.png'} alt={imgattr}/></a>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
     }
}

export default Services_V1