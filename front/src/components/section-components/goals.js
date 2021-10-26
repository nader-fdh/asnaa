import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Goals extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        
    return <div>
            <div className="sbtc-goal-counter-area pd-top-115">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-9">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/others/7.png"} alt="goal" />
                    </div>
                    <div className="goal-counter">
                      <div className="section-title">
                        <h2 className="title">Achieving <span>goals</span> <br /> as a team</h2>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="single-counter text-center">
                            <span className="counting count-num">1054</span>
                            <h6>Worldwide User</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single-counter text-center">
                            <span className="counting count-num">965</span>
                            <h6>Happy Client</h6>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single-counter text-center">
                            <span className="counting count-num">142</span>
                            <h6>Running Project</h6>
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

export default Goals