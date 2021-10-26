import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class ApplyForm extends Component {
  render() {
    let customclass = this.props.customclass ? this.props.customclass : '';
    let data = sectiondata.JobAplly;

    return (
      <div>
        <div className={'job-listing-page ' + customclass}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center">
                  <h2 className="title">{data.sectiontitle}</h2>
                  <p>{data.sectionsubtitle}</p>
                </div>
                <div className="job-apply-area">
                  <form className="riyaqas-form-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" required />
                          <label>First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="email" className="single-input" required />
                          <label>E-mail</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" required />
                          <label>Phone</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" required />
                          <label>Applying for the of</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <textarea className="single-input" cols={20} defaultValue={''} />
                          <label>Portfolio Link</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <textarea className="single-input" cols={20} defaultValue={''} required />
                          <label>Write Your Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="custom-file riyaqas-file-input-wrap">
                          <input type="file" className="riyaqas-file-input" id="sb-file-input" />
                          <label className="custom-file-label" htmlFor="sb-file-input">
                            Upload Your Resume
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button className="btn btn-blue" href="#">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplyForm;
