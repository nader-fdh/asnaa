import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class Slider_V1 extends Component {
  render() {
    let imgalt = "image";
    let publicUrl = process.env.PUBLIC_URL + "/";
    let data = sectiondata.slider_v1;

    return (
      <div>
        <div className="header-area header-bg">
          <div className="container">
            <div className="banner-slider banner-slider-one">
              {data.items.map((item, i) => (
                <div key={i} className="banner-slider-item">
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                      <div className="header-inner-details">
                        <div className="header-inner">
                          <h1 className="title s-animate-1">
                            {item.title1} <span>{item.title_color}</span>{" "}
                            {item.title2}
                          </h1>
                          <p className="s-animate-2">
                            {parse(item.description)}
                          </p>
                          <div className="btn-wrapper desktop-left padding-top-20">
                            <a
                              href={item.button_url}
                              className="btn btn-radius btn-green s-animate-3"
                            >
                              {item.button_text}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 hidden-sm">
                      <div className="banner-thumb-wrap">
                        <div className="banner-thumb">
                          <img
                            className="header-inner-img"
                            src={publicUrl + item.image_url1}
                            alt={imgalt}
                          />
                          <img
                            className="banner-1-img2"
                            src={publicUrl + item.image_url2}
                            alt={imgalt}
                          />
                          <img
                            className="banner-1-img3"
                            src={publicUrl + item.image_url3}
                            alt={imgalt}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider_V1;
