import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class BusinessManage extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.businessmanage
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="sbbs-business-manage-area mg-top-75">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 order-lg-12 desktop-center-item">
                    <div className="text-lg-left text-center">
                      <div className="section-title style-two">
                        <h2 className="title"><span dangerouslySetInnerHTML={{__html: data.sectiontitle}}>
                        </span> <br /> { data.sectionsubtitle }</h2>
                        <p>{ data.short_description }</p>
                      </div>
                      { data.items.map( ( item, i )=> 
                         <div key={ i } className="riyaqas-check-list">
                            <img src={publicUrl+"assets/img/icons/check.png"} alt={ imgattr } />
                            <span>{ item.title }</span>
                          </div>
                       )}
                     


                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 order-lg-1">
                    <img src={ publicUrl+data.image } alt={imgattr} />
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default BusinessManage