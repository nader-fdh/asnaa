import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class What_We_Offer extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.whatwedo
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className={ "sbst-service-area "+customclass}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-10">
                            <div className="section-title text-center">
                                <h2 className="title">{data.offertitel} <span>{data.offer_color}</span></h2>
                                <p>{data.short_description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row custom-gutters-20 justify-content-center">

                    {data.items.map( ( item, i ) => 
                        <div key={i} className="col-lg-3 col-sm-6">
                            <div className="single-service-2 text-center">
                                <div className="thumb">
                                    <img src={publicUrl+item.icon} alt={imgattr}/>
                                </div>
                                <h6>{item.title}</h6>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default What_We_Offer