import React from "react";
import sectiondata from "../../data/sections.json";

const Subscribe = () => {
  return (
    <div>
      <div className="newsletter-area mg-top-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10 text-center">
              <div className="section-title">
                <h2 className="title">
                  {sectiondata.subscribe.sectiontitle}{" "}
                  <span>{sectiondata.subscribe.sectiontitle_color}</span>
                </h2>
                <p>{sectiondata.subscribe.short_description}</p>
              </div>
              <div className="newsletter-subcribe">
                <form id="news-subcribeform" className="subcribe-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your E-mail..."
                      name="mail"
                      required=""
                    />
                    <button type="submit" className="btn-green subcribe-submit">
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
