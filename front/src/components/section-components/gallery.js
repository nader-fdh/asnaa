import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        
    return <div>
            <div className="gallery-area pd-top-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="gallery-masonry-wrapper">
                      <ul className="gallery-menu text-center">
                        <li className="active" data-filter="*">See All</li>
                        { sectiondata.gallery.categorylist.map( ( item, i ) =>
                            <li key={ i } data-filter={"."+ item.slug}>{ item.catname }</li>
                         ) }
                      </ul>

                      <div className="gallery-masonry row no-gutters">
                        { sectiondata.gallery.items.map( ( item, i ) =>
                            <div key={ i } className={"col-md-4 col-sm-6 masonry-item "+ item.class}>
                              <a className="single-work-item text-center" data-effect="mfp-zoom-in" href={ publicUrl+item.img }>
                                <span className="thumb">
                                  <img src={ publicUrl+item.img } alt="gallery" />
                                </span>
                                <span className="content-wrap">
                                  <span className="content">
                                    <span className="cats">{ item.tag }</span>
                                    <span className="title">{ item.title }</span>
                                  </span>
                                </span>
                              </a>
                            </div>
                        ) }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default Gallery