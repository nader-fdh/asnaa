import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Team extends Component {

   componentDidMount() {
     var publicUrl = process.env.PUBLIC_URL+'/'
     var imgattr = 'image'
     const $ = window.$;
    
      var $teamCarousel = $('.team-slider');
        if ($teamCarousel.length > 0) {
            $teamCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: true,
                nav: true,
                items: 1,
                smartSpeed: 1500,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText:['<img src="'+publicUrl+'assets/img/startup/left.png" alt="arrow">','<img src="'+publicUrl+'assets/img/startup/right.png" alt="arrow">'],
            });
        }
        }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.teamv2

    return <div>
            <div className="sbtc-team-section mg-top-65">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="section-title text-md-center">
                      <h2 className="title">{ data.sectiontitle }<span>{ data.sectiontitle_color }</span></h2>
                      <p>{ data.short_description }</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                    <div className="team-slider">
                     { data.items.map( ( item, i ) =>
                        <div key={ i } className="team-slider-item">
                        <div className="row">
                          <div className="col-lg-6 order-lg-12">
                            <div className="team-member-img">
                              <div className="team-shape1" />
                              <div className="thumb">
                                <img src={ publicUrl+item.image_url } alt={ imgattr } />
                              </div>
                              <div className="team-shape2" />
                            </div>
                          </div>
                          <div className="col-lg-6 order-lg-1">
                            <div className="team-member-details">
                              <h3>{ item.title }<br /> <span>{ item.color }</span></h3>
                              <p>{ item.content }</p>
                              <span className="name d-block">Refule Mia</span>
                              <span className="designation d-block">{ item.name }</span>
                              <span className="social-media-title">{ item.designation }</span>
                              <ul>
                                <li>
                                  <a href="#"><img src={publicUrl+"assets/img/icons/t1.png"} alt="img" /></a>
                                </li>
                                <li>
                                  <a href="#"><img src={publicUrl+"assets/img/icons/t2.png"} alt="img" /></a>
                                </li>
                                <li>
                                  <a href="#"><img src={publicUrl+"assets/img/icons/t3.png"} alt="img" /></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      ) }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default Team