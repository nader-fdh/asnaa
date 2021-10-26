import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

class PaymentInfo extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.paymentinfo


    return <div>
            <div className="business-time pd-top-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6 sbimg-center-align pb-4">
                  <div className="mask-bg-wrap mask-bg-img-1">
                    <div className="thumb">
                      <img src={ publicUrl+data.image } alt={ imgattr } />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1 desktop-center-item">
                  <div className="mg-top-767-45-">
                    <div className="section-title style-two">
                      <h2 className="title">{ data.title } <span>{ data.color }</span></h2>
                      <p>{ data.content }</p>
                    </div>

                    { data.items.map( ( item, i ) =>
                       <div key={ i } className="riyaqas-check-list">
                        <img src={publicUrl+"assets/img/icons/check2.png"} alt="check" />
                        <span>{ item.content }</span>
                      </div>
                     ) }
                   

                    <div className="payment-method style-two">
                      <ul>
                        <li>
                          <a href="#"><img src={publicUrl+"assets/img/checkout/1.png"} alt="img" /></a>
                          <a href="#"><img src={publicUrl+"assets/img/checkout/2.png"} alt="img" /></a>
                          <a href="#"><img src={publicUrl+"assets/img/checkout/3.png"} alt="img" /></a>
                          <a href="#"><img src={publicUrl+"assets/img/checkout/4.png"} alt="img" /></a>
                          <a href="#"><img src={publicUrl+"assets/img/checkout/5.png"} alt="img" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
}

export default PaymentInfo