import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Job_Listing extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.joblisting
        let customclass = this.props.customclass ? this.props.customclass : ''
        
    return <div>
           <div className= { "job-details-area "+ customclass }>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 offset-xl-1">
                  <div className="section-title">
                    <h2 className="title">Job Details</h2>
                  </div>
                  <h6 className="title">Fashion Designer</h6>
                  <span>Bevilard international</span>
                  <h6 className="sub-title">Vacancy</h6>
                  <span>04</span>
                  <h6 className="sub-title">Job Responsibilities</h6>
                  <ul>
                    <li>
                      Find out fashion trends of International market and to work out of
                      them
                    </li>
                    <li>
                      Creation of creative fashion design that suits the company brand's requirement.
                    </li>
                    <li>
                      Development of new accessories design for upcoming collection.
                    </li>
                    <li>Analyze development in fabrics, colors and shapes</li>
                    <li>Conduct brainstorming, designing and producing concepts</li>
                    <li>
                      Develop design ideas through coordination with merchandising and
                      client.
                    </li>
                    <li>Ensure developing of patterns &amp; overseeing the production</li>
                    <li>
                      Able to work in illustrator or any other fashion design software to
                      develop Woven tops &amp; Bottom sketches for men, ladies, kids
                      accessories details.
                    </li>
                    <li>Must be able to develop new collection for every season.</li>
                    <li>Making Flat Sketch (Tops &amp; Bottoms) in graphic software.</li>
                    <li>Design new labeling and badge.</li>
                    <li>Making sketch according to Buyer request.</li>
                    <li>Making presentation file for customer meeting.</li>
                    <li>
                      Design &amp; develop men's and women's traditional product line up
                      based on seasons that will generate sales in local and global market
                    </li>
                    <li>
                      Study &amp; analyze the market &amp; industry trend to have a
                      reflection on product design &amp; development to fulfill the
                      customer needs
                    </li>
                    <li>
                      Present innovative saleable design ideas to the creative director,
                      MD and sales team Determine product fabric &amp; fitting (select
                      fabrics, embellishments, color, styles which will fit for each
                      garmentor accessory within the budget)
                    </li>
                    <li>
                      Understanding design from technical perspective, developing pattern
                      &amp; supervision of these including fitting, detailing &amp;
                      adaptions{" "}
                    </li>
                    <li>Create a project book and check sample</li>
                    <li>Employment Status</li>
                    <li>Full-time</li>
                  </ul>
                  <h6 className="sub-title">Educational Requirements</h6>
                  <p>Bachelor of Fine Arts (B.F.A)</p>
                  <p>
                    Training/Trade Course: Shanto Mariam University of Creative
                    Technology,BGMEA University of Fashion
                  </p>
                  <p>
                    Technology students wi,Skills Required: Graphics Design; Local and
                    world populated Fashion house (Buyer)
                  </p>
                  <h6 className="sub-title">Experience Requirements</h6>
                  <p>1 to 3 year(s)</p>
                  <p>The applicants should have experience in the following area(s):</p>
                  <p>Fashion Design</p>
                  <h6 className="sub-title">Additional Requirements</h6>
                  <p>Age 26 to 35 years</p>
                  <p>Both males and females are allowed to apply</p>
                  <h6 className="sub-title">Job Location</h6>
                  <p>Gulshan, Dhaka Division, Dhaka.</p>
                  <h6 className="sub-title">Salary</h6>
                  <p className="m-0">Negotiable</p>
                  <a href="#" className="job-apply-btn">
                    Apply Now
                  </a>
                </div>
                <div className="col-xl-3 col-lg-4 offset-xl-1">
                  <div className="widget widget-job-details">
                    <h3 className="widget-title">Job Details</h3>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/1.png'}  alt="icon" />
                      <div className="media-body">
                        <h6>Department</h6>
                        <span>UI Designer</span>
                      </div>
                    </div>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/2.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Location</h6>
                        <span>Bangladesh</span>
                      </div>
                    </div>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/3.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Job Type</h6>
                        <span>Full Time</span>
                      </div>
                    </div>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/4.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Experience</h6>
                        <span>2 years</span>
                      </div>
                    </div>
                    <div className="media single-job-details mb-0">
                      <img src={publicUrl+'assets/img/icons/5.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Salary</h6>
                        <span>$2000</span>
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

export default Job_Listing