import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class Services_V5 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let anchor = '#';
    let imgattr = 'image';
    let data = sectiondata.servicesv5;
    let customclass = this.props.customclass ? this.props.customclass : '';

    return (
      <div>
        <div className="sbtl-service-area pd-top-112 pd-bottom-100 gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="section-title section-title-2 text-center">
                  <h2 className="title">
                    {data.title1} <span>{data.color}</span> {data.title2}
                  </h2>
                  <p style={{ textAlign: 'left', marginLeft: '35px' }}>
                    Après la création du votre compte (professionnel/particulier) <br /> -Choisir la technique souhaitée selon votre pièce
                    et matériaux <br /> -Demander votre devis en ligne <br /> -Confirmation de votre commande <br /> -Fabrication de vos
                    pièces <br /> -Livraison
                  </p>
                </div>
              </div>
            </div>
            <div className="row custom-gutters-16 justify-content-center">
              {data.items.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="single-service-2 style-two">
                    <div className="thumb ml-0">
                      <img src={publicUrl + item.icon} alt={imgattr} />
                    </div>
                    <h6>{item.title}</h6>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services_V5;
