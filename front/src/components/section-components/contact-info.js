import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Contact_Info extends Component {
  render() {
    return (
      <div>
        <div className="map-area pd-top-120">
          <div className="container">
            <div className="map-area-wrap">
              <div className="row no-gutters">
                <div className="col-lg-8">
                  <iframe
                    title="riyaqas-map"
                    width="1075"
                    height="440"
                    src="https://maps.google.com/maps?width=4&amp;height=30&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
                <div className="col-lg-4 desktop-center-item">
                  <div>
                    <div className="contact-info">
                      <h4 className="title">{sectiondata.contactinfo.title}</h4>
                      <p className="sub-title">{sectiondata.contactinfo.description}</p>
                      <p>
                        <span>Address:</span> {parse(sectiondata.contactinfo.address)}
                      </p>
                      <p>
                        <span>Mobile:</span> {sectiondata.contactinfo.mobile}
                      </p>
                      <p>
                        <span>E-mail:</span> {sectiondata.contactinfo.mail}
                      </p>
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

export default Contact_Info;
