import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import './features.css';

class Features extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = 'image';

    return (
      <div>
        <div className="sba-featute-area">
          <div className="container">
            <div className="row custom-gutters-16 justify-content-center">
              <div className="col-xl-4 col-lg-9">
                <div className="section-title style-two text-xl-left text-center">
                  <h2 className="title">
                    {parse(sectiondata.features.sectiontitle)} <span>{sectiondata.features.sectiontitle_color}</span>
                  </h2>
                  <p>{sectiondata.features.short_description}</p>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6">
                <div className="single-feature-left">
                  <div className="single-feature">
                    <div className="media">
                      {/* <img className="media-left" src={publicUrl + 'assets/img/features/1.png'} alt="feature" /> */}
                      <div className="media-body">
                        <h6 style={{ fontSize: '20px' }}>Vision :</h6>
                        <p className="widthPaV">
                          Notre vision c’est de faciliter la fabrication des produits et de les rendre accessiblesà tout le monde quel que
                          soit pour particuliers ou professionnels . Notre devoir ce n’est pas seulement de fabriquer mais aussi
                          l’accompagnement des projets et la proposition des meilleurs solutions convenables à votre besoins
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-feature">
                    <div className="media border-radius-2">
                      <div className="media-body">
                        <h6 style={{ fontSize: '20px' }}>Qualité</h6>
                        <p className="widthPa">
                          {' '}
                          Note équipe vous assoie la meilleure qualité de services et de fabrication que vous attendez
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 mg-top-80">
                <div className="single-feature-right">
                  <div className="single-feature">
                    <div className="media border-radius-3">
                      <div className="media-body">
                        <h6 style={{ fontSize: '20px' }}>Mission</h6>
                        <p className="widthPaM">
                          La mission de ASNAA est d’intègre la fabrication dans le monde du digitale avec la meilleure technologie et
                          expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-feature">
                    <div className="media border-radius-4">
                      <div className="media-body">
                        <h6 style={{ fontSize: '20px' }}>Confidentialité</h6>
                        <p className="widthPaC">
                          Un accord de confidentialité vise à régir la confidentialité des informations échangées entre ASNAA et ses clients
                          relativement à un projet ou même une petite fabrication
                        </p>
                      </div>
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

export default Features;
