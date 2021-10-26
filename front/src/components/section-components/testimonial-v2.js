import React, { Component } from "react";
import sectiondata from "../../data/sections.json";

class Testimonial_V2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";
    let data = sectiondata.testimonial_v1;

    return (
      <div>
        <div className="sba-client-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-9">
                <div className="section-title style-two text-center">
                  <h2 className="title">
                    {data.sectiontitle} <span>{data.sectiontitle_color}</span>
                  </h2>
                  <p>{data.short_description}</p>
                </div>
              </div>
            </div>
            <div className="client-slider">
              {data.items.map((item, i) => (
                <div key={i} className="client-slider-item">
                  <div className="media">
                    <img src={publicUrl + item.imgurl} alt={imgattr} />
                    <div className="media-body">
                      <h6>{item.client}</h6>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                  <p className="client-content">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial_V2;
