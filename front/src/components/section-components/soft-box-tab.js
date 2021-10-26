import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Soft_Box_Tab extends Component  {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'

        return <div>
                <div className="sbs-provide-security pd-top-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6 offset-xl-1 order-lg-12 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="img-with-video">
                                    <div className="img-wrap">
                                        <img src={publicUrl+sectiondata.softboxtab.imgurl} alt={imgattr} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 order-lg-1 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title style-two">
                                <h2 className="title"><span>{sectiondata.softboxtab.sectiontitle}</span> {sectiondata.softboxtab.sectiontitle_color}</h2>
                                </div>
                                <div className="riyaqas-stab">
                                    <ul className="nav nav-tabs">
                                    {sectiondata.softboxtab.tabs.map( ( item, i ) =>
                                    {
                                        let active = '';
                                                    
                                        if( i === 0 ) {
                                            active = 'active';
                                        }
                                    
                                        return (
                                        <li key={i} className="nav-item">
                                            <a className={'nav-link '+active} data-toggle="tab" href={"#"+item.id}>{item.tab_name}</a>
                                        </li>
                                        )

                                    } )}
                                    </ul>
                                    <div className="tab-content">
                                    {sectiondata.softboxtab.tabs.map( ( item, i ) =>

                                        {

                                        let active = '',
                                            show = '';
            
                                        if( i === 0 ) {
                                            active = 'active';
                                            show = ' show';
                                        }
                                        
                                        return (
                                        <div key={i} className={'tab-pane fade '+active+show} id={item.id} >
                                            <div className="riyaqas-stab-content">
                                               <p>{item.tab_content}</p>
                                            </div>
                                        </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

export default Soft_Box_Tab