import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Video extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.video
        
    return <div>
            <div className="sbs-provide-security pd-top-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 order-lg-12 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="img-with-video">
                                <div className="img-wrap">
                                    <img src={publicUrl + data.image_url} alt={imgattr}/>
                                    <div className="hover">
                                        <a href={data.video_url} className="video-play-btn mfp-iframe"><img src={publicUrl+'assets/img/we-provide/3.png'} alt={imgattr}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 order-lg-1 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="section-title style-two">
                                <h2 className="title">{parse(data.title)} <span>{data.title_color}</span></h2>
                                <p>{data.description}</p>
                            </div>
                            <div className="row">
                            {data.list.map( ( item, i ) => 
                                <div key={i} className="col-md-6">
                                    <div className="riyaqas-check-list">
                                        <img className="media-left" src={publicUrl+item.icon} alt={imgattr}/>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Video