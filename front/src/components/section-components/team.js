import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Team extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'

    return <div>
            <div className="team-area-wrpper about-team-area-wrpper pd-top-112 mg-top-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-10">
                            <div className="section-title text-center">
                                <h2 className="title">{sectiondata.team.sectiontitle} <span>{sectiondata.team.sectiontitle_color}</span></h2>
                                <p>{sectiondata.team.short_description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-area text-center">
                    <div className="container">
                        <div className="row custom-gutters-20">
                        {sectiondata.team.items.map( ( item, i ) => 
                            <div key={i} className="col-lg-3 col-sm-6">
                                <div className="single-team">
                                    <div className="thumb">
                                        <img src={publicUrl+item.image_url} alt={imgattr} />
                                    </div>
                                    <h6><a href={item.url}>{item.name}</a></h6>
                                    <span>{item.designation}</span>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Team