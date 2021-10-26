import React, { Component } from 'react';
import sectiondata from '../../data/product.json';
import { Link } from 'react-router-dom';

class Product extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let anchor = '#'
        let imgattr = 'image'
        let customclass = this.props.customclass ? this.props.customclass : ''
        let data = sectiondata.products
   
        return <div>
                <div className="shop-area bg-gray pd-top-112 mg-top-120 pd-bottom-65">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-9">
                        <div className="section-title style-two text-center">
                          <h2 className="title">{ data.title } <span> { data.subtitle } </span></h2>
                          <p>{ data.description }</p>
                        </div>
                      </div>
                    </div>
                    <div className="row custom-gutters-16">
                    { data.items.map( ( item, i )=>
                        <div key={ i } className="col-lg-3 col-sm-6">
                        <div className="single-shop">
                          <div className="thumb">
                            <img src={ publicUrl+item.image } alt={ imgattr } />
                            <div className="cart-btn">
                              <div className="cart-btn-wrap">
                                <Link className="btn btn-red" to="/shop-details">Add to card <i className="fa fa-shopping-cart" /></Link>
                              </div>
                            </div>
                          </div>
                          <div className="content">
                            <div className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                           <Link to="/shop-details">{ item.name }</Link>
                            <div className="price">
                              <span>{ item.newerprice }</span><del>{ item.olderprice }</del>
                            </div>
                          </div>
                        </div>
                      </div>
                     ) }
                      
                    </div>
                  </div>
                </div>

            </div>
     }
}

export default Product