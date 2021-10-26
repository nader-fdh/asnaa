import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Marketing extends Component {

    componentDidMount() {
     var publicUrl = process.env.PUBLIC_URL+'/'
     var imgattr = 'image'
     const $ = window.$;
    
          var $screenshotCarousel = $('.marketing-slider');
        if ($screenshotCarousel.length > 0) {
            $screenshotCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: false,
                margin: 16,
                nav: true,
                smartSpeed: 1500,
                navText:['<img src="'+publicUrl+'assets/img/startup/left.png" alt="arrow">','<img src="'+publicUrl+'assets/img/startup/right.png" alt="arrow">'],
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 60,
                    },
                    576: {
                        items: 2,
                        stagePadding: 60,
                    },
                    768: {
                        items: 2,
                        stagePadding: 50,
                    },
                    1300: {
                        items: 2,
                        stagePadding: 125,
                    }
                }
            });
        }
        
        }
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.markeking
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className={"marketing-area "+customclass}>
              <div className="row no-gutters">
                <div className="col-lg-5 pr-lg-3 d-flex float-left">
                  <div className="section-title style-two mb-0 blue-bg">
                    <h2 className="title title-2">{ data.title } <span>{ data.color }</span> { data.subtitle }</h2>
                    <p> { data.content1 } </p>
                    <p>{ data.content2 }</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="marketing-slider">
                   { data.items.map( ( item, i ) =>
                        <div key={ i } className="marketing-slider-item">
                        <div className="marketing-slider-details">
                          <div className="thumb">
                            <img src={ publicUrl+item.icon } alt={ imgattr } />
                          </div>
                          <div className="marketing-slider-content">
                            <a href="#"><img src={publicUrl+"assets/img/icons/link.png"} alt="img" /></a>
                            <p>{ item.content }</p>
                          </div>
                        </div>
                      </div>
                     ) }
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default Marketing