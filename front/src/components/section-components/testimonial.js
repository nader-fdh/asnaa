import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.testimonial
        let anchor = '#'

    return <div>
            <div className="testimonial-section sbs-testimonial-section pd-top-105 pd-bottom-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 pd-xl-5 order-lg-12 align-self-center ">
                            <div className="section-title style-two mb-0">
                                <h2 className="title">{data.sectiontitle} <span>{data.sectiontitle_color}</span></h2>
                                <p>{data.short_description}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="sbs-testimonial-slider">
                                <div className="choose_slider">
                                    <div className="choose_slider_items">
                                        <ul id="testimonial-slider">
                                        {data.items.map( ( item, i ) => 
                                            <li key={i} className="current_item">
                                                <div className="media">
                                                    <img className="media-left" src={publicUrl+item.imgurl} alt={imgattr}/>
                                                    <div className="media-body">
                                                        <h6>{item.client}</h6>
                                                        <p className="designation">{item.designation}</p>
                                                        <span>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <p>{item.content}</p>
                                            </li>
                                        )}                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="sbs-arrowleft"><a id="btn_next" href={anchor}><i className="fa fa-long-arrow-left"></i></a></div>
                                <div className="sbs-arrowright"><a id="btn_prev" href={anchor}><i className="fa fa-long-arrow-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Testimonial