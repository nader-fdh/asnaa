import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class LatestPost extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        
    return <div>
            <div className="post-area pd-top-110">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="section-title text-lg-center">
                      <h2 className="title">Our Latest <span>Post</span></h2>
                      <p>Riyaqas One of the best Software Development company. Riyaqas is at the forefront as the most.</p>
                    </div>
                  </div>
                </div>
                <div className="row custom-gutters-16">
                  <div className="col-lg-4">
                    <div className="single-case-studies style-two">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/blog/8.png"} alt="img" />
                      </div>
                      <div className="details">
                        <div className="admin">
                          <span>By: Admin / </span>
                          <span> Nov 18, 2019</span>
                        </div>
                        <h6><a href="#">Digital Marketing Problem Solving Meating</a></h6>
                        <p>Riyaqas One of the best Software Development company. Riyaqas is at the forefront as the most innovative web development company.</p>
                        <a className="read-more" href="#">Read More <i className="la la-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-case-studies style-two">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/blog/9.png"} alt="img" />
                      </div>
                      <div className="details">
                        <div className="admin">
                          <span>By: Admin / </span>
                          <span> Nov 18, 2019</span>
                        </div>
                        <h6><a href="#">We are developing our Team by Training</a></h6>
                        <p>Riyaqas One of the best Software Development company. Riyaqas is at the forefront as the most innovative web development company.</p>
                        <a className="read-more" href="#">Read More <i className="la la-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-case-studies style-two">
                      <div className="thumb">
                        <img src={publicUrl+"assets/img/blog/10.png"} alt="img" />
                      </div>
                      <div className="details">
                        <div className="admin">
                          <span>By: Admin / </span>
                          <span> Nov 18, 2019</span>
                        </div>
                        <h6><a href="#">Digital Marketing Problem Solving Meating</a></h6>
                        <p>Riyaqas One of the best Software Development company. Riyaqas is at the forefront as the most innovative web development company.</p>
                        <a className="read-more" href="#">Read More <i className="la la-long-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default LatestPost