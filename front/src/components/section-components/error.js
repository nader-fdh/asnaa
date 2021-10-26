import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class Error extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'


    return <div>
            <div className="error-area text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 col-7">
                    <div className="error-page-left-img">
                      <div className="top-image">
                        <img className="error-img-1" src={ publicUrl+"assets/img/others/3.png"} alt={404} />
                        <span>Oops !</span>
                      </div>
                      <img src={ publicUrl+"assets/img/others/2.png"}  alt={404} />
                    </div>
                  </div>
                  <div className="col-md-8 text-center">
                    <img src={ publicUrl+"assets/img/others/1.png"}  alt={404} />
                    <div className="error-back-to-home">
                      <a className="btn" href="#">Go to Home</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default Error