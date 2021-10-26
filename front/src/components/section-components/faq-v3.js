import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class Faq extends Component {

    render() {

        let imgattr = 'image'
        let data = sectiondata.faq
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="faq-area pd-top-105">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-11">
                    <div className="section-title text-center">
                      <h2 className="title">Frequently Asked Questions <span>FAQ</span></h2>
                      <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever</p>
                    </div>
                    <div className="accordion style-two" id="accordion">
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why buy domain from Riyaqas?</button>
                          </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">Domain is registration required?</button>
                          </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">How long does delivery take?</button>
                          </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingFour">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">How is the payment methode?</button>
                          </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingFive">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">When will i receive my refund?</button>
                          </h2>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card">
                        <div className="card-header" id="headingSix">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseOne">How long does delivery take?</button>
                          </h2>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          </div>
                        </div>
                      </div>
                      {/* single accordion */}
                      <div className="single-accordion card mb-0">
                        <div className="card-header" id="headingSeven">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseOne">Can you buy domain and sell?</button>
                          </h2>
                        </div>
                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                          <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                          </div>
                        </div>
                      </div>
                      {/* single accordion end */}
                    </div>
                  </div>
                  <div className="col-xl-9">
                    <div className="border-bottom-dashed pd-bottom-120" />
                  </div>
                </div>
              </div>
            </div>
         </div>
    }
}

export default Faq