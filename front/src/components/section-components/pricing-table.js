import React from 'react';
import sectiondata from '../../data/sections.json';

const Pricing_Table = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';

  return (
    <div>
      <div className="sba-pricing-area bg-gray pd-default-two mg-top-170">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="section-title text-center">
                <h2 className="title">
                  {sectiondata.pricingtable.sectiontitle} <span>{sectiondata.pricingtable.sectiontitle_color} </span>en Ligne
                </h2>
                <p>
                  Après la création du votre compte (professionnel/particulier) <br /> -Choisir la technique souhaitée selon votre pièce et
                  matériaux <br /> -Demander votre devis en ligne <br /> -Confirmation de votre commande <br /> - Fabrication de vos pièces
                  -Livraison
                </p>
              </div>
            </div>
          </div>
          <div className="row custom-gutters-20">
            {sectiondata.pricingtable.tables.map((item, i) => (
              <div key={i} className="col-xl-3 col-sm-6">
                <div className="single-pricing text-center">
                  <h6 className="title">{item.title}</h6>
                  <div className="thumb">
                    <img src={publicUrl + item.icon} alt={imgattr} />
                  </div>

                  <ul>
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing_Table;
