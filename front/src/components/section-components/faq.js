import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class Faq extends Component {

    render() {

        let imgattr = 'image'
        let data = sectiondata.faq
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className={ "faq-area "+customclass }>
              <div className="container">
                <div className="row custom-gutters-60 justify-content-center">
                  <div className="col-xl-9 col-lg-11">
                    <div className="section-title text-center">
                      <h2 className="title">{ data.sectiontitle } <span>{ data.sectiioncolor }</span></h2>
                    </div>
                    <div className="accordion" id="accordion">
                     { data.items.map( ( item, i ) =>
                          <div key={ i } className="single-accordion card">
                          <div className="card-header" id={"headingOne"+i}>
                            <h2 className="mb-0">
                              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapseOne"+i} aria-expanded="true" aria-controls="collapseOne">
                                { item.title }
                              </button>
                            </h2>
                          </div>
                          <div id={"collapseOne"+i} className={"collapse "+ item.class} aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </div>
                          </div>
                        </div>
                      ) }
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
    }
}

export default Faq