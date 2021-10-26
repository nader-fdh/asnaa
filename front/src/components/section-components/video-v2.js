import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class Video_V2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";
    let data = sectiondata.videov2;
    let customclass = this.props.customclass ? this.props.customclass : "";

    return (
      <div>
        <div className={"sba-work-area img-with-video-area " + customclass}>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 order-lg-12 desktop-center-item">
                <div
                  className="section-title ml-xl-4 mb-lg-0 style-two text-lg-left text-center wow animated fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <h2 className="title">
                    {parse(data.title)} <span>{data.title_color}</span>
                  </h2>
                  {parse(data.description)}
                </div>
              </div>
              <div
                className="col-xl-7 col-lg-6 order-lg-1 wow animated fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="img-with-video">
                  <div className="img-wrap">
                    <img src={publicUrl + data.image_url} alt={imgattr} />
                    <div className="hover">
                      <a
                        href={data.video_url}
                        className="video-play-btn mfp-iframe"
                      >
                        <img
                          src={publicUrl + "/assets/img/we-provide/3.png"}
                          alt={imgattr}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video_V2;
