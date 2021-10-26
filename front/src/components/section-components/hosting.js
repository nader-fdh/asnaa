import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class Hosting extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.about
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="hosting-type-area pd-top-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <ul className="nav nav-tabs sb-hosting-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#d_tabs_1"><img src={publicUrl+"assets/img/icons/13.png"} alt="img" />Shared Hosting</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#d_tabs_2"><img src={publicUrl+"assets/img/icons/14.png"} alt="img" />Reseller Hosting</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#d_tabs_3"><img src={publicUrl+"assets/img/icons/15.png"} alt="img" />VPS Hosting</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#d_tabs_4"><img src={publicUrl+"assets/img/icons/16.png"} alt="img" />Dedicated Hosting</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#d_tabs_5"><img src={publicUrl+"assets/img/icons/17.png"} alt="img" />Cloud Hosting</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-9">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="d_tabs_1">
            <div className="single-hosting-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="section-title style-two hosting-tab-title">
                    <h6 className="title">Shared <span>Hosting</span></h6>
                  </div>
                  <p>Our managed cloud hosting platform There are many variations passages of Lorem available, but the majority have suffered alteration in some form, by injected humour</p>
                  <p>Shared hosting randomised words which don't look even slightly believable.</p>
                </div>
                <div className="col-lg-4">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/others/20.png"} alt="img" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="riyaqas-check-list-wrap">
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Technical complexities, letting you focus</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>We are committed to deliver fast</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Apps more collaboratively.</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media mb-0">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="d_tabs_2">
            <div className="single-hosting-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="section-title style-two">
                    <h6 className="title">Reseller <span>Hosting</span></h6>
                  </div>
                  <p>Our managed cloud hosting platform There are many variations passages of Lorem available, but the majority have suffered alteration in some form, by injected humour</p>
                  <p>Reseller hosting randomised words which don't look even slightly believable.</p>
                </div>
                <div className="col-lg-4">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/others/20.png"} alt="img" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="riyaqas-check-list-wrap">
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>We are committed to deliver fast</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Apps more collaboratively.</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Technical complexities, letting you focus</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media mb-0">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="d_tabs_3">
            <div className="single-hosting-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="section-title style-two">
                    <h6 className="title">VPS <span>Hosting</span></h6>
                  </div>
                  <p>Our managed cloud hosting platform There are many variations passages of Lorem available, but the majority have suffered alteration in some form, by injected humour</p>
                  <p>VPS hosting randomised words which don't look even slightly believable.</p>
                </div>
                <div className="col-lg-4">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/others/20.png"} alt="img" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="riyaqas-check-list-wrap">
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Apps more collaboratively.</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Technical complexities, letting you focus</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>We are committed to deliver fast</span>
                    </div>
                    <div className="riyaqas-check-list media mb-0">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="d_tabs_4">
            <div className="single-hosting-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="section-title style-two">
                    <h6 className="title">Dedicated <span>Hosting</span></h6>
                  </div>
                  <p>Our managed cloud hosting platform There are many variations passages of Lorem available, but the majority have suffered alteration in some form, by injected humour</p>
                  <p>Dedicated hosting randomised words which don't look even slightly believable.</p>
                </div>
                <div className="col-lg-4">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/others/20.png"} alt="img" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="riyaqas-check-list-wrap">
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Apps more collaboratively.</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Technical complexities, letting you focus</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                    <div className="riyaqas-check-list media mb-0">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>We are committed to deliver fast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="d_tabs_5">
            <div className="single-hosting-content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="section-title style-two">
                    <h6 className="title">Cloud <span>Hosting</span></h6>
                  </div>
                  <p>Our managed cloud hosting platform There are many variations passages of Lorem available, but the majority have suffered alteration in some form, by injected humour</p>
                  <p>Cloud hosting randomised words which don't look even slightly believable.</p>
                </div>
                <div className="col-lg-4">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/others/20.png"} alt="img" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="riyaqas-check-list-wrap">
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Technical complexities, letting you focus</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>We are committed to deliver fast</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Apps more collaboratively.</span>
                    </div>
                    <div className="riyaqas-check-list media">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Powered by top of the line enterprise</span>
                    </div>
                    <div className="riyaqas-check-list media mb-0">
                      <img className="media-left" src={publicUrl+"assets/img/icons/check3.png"} alt="check" />
                      <span>Manage web apps more collaboratively</span>
                    </div>
                  </div>
                </div>
              </div>
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

export default Hosting