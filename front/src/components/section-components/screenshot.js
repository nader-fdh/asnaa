import React, { Component } from "react";
import sectiondata from "../../../data/sections.json";

class Screenshot extends Component {
  componentDidMount() {
    var publicUrl = process.env.PUBLIC_URL + "/";
    var imgattr = "image";
    const $ = window.$;

    const $screenshotCarousel = $(".screenshot-slider");
    if ($screenshotCarousel.length > 0) {
      $screenshotCarousel.owlCarousel({
        loop: true,
        autoplay: false, //true if you want enable autoplay
        autoPlayTimeout: 1000,
        dots: false,
        nav: true,
        smartSpeed: 1000,
        navText: [
          '<img src="' +
            publicUrl +
            'assets/img/startup/left.png" alt="arrow">',
          '<img src="' +
            publicUrl +
            'assets/img/startup/right.png" alt="arrow">',
        ],
        responsive: {
          0: {
            items: 1,
          },
          767: {
            items: 1,
          },
          768: {
            items: 3,
          },
          1200: {
            items: 5,
          },
        },
      });
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";

    return (
      <div>
        <div className="sba-screenshot-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-9">
                <div className="section-title text-center">
                  <h2 className="title">
                    {sectiondata.screenshots.sectiontitle}{" "}
                    <span>{sectiondata.screenshots.sectiontitle_color}</span>
                  </h2>
                  <p>{sectiondata.screenshots.short_description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="screenshot-slider">
                {sectiondata.screenshots.images.map((item, i) => (
                  <div key={i} className="screenshot-slider-item">
                    <div className="thumb">
                      <img src={publicUrl + item} alt={imgattr} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screenshot;
