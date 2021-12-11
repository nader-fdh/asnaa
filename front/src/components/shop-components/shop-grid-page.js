import React, { Component, useEffect } from 'react';
import sectiondata from '../../data/product.json';
import { Link } from 'react-router-dom';
import ProductSidebar from '../section-components/product-sidebar';
import Navbar from '../global-components/navbar';
import Footer_V2 from '../global-components/footer-v2';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productAction';
import { useStateValue } from '../../StateProvider';
import OneProduct from './OneProduct';
import Page_header from '../global-components/page-header';

function ShopPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  console.log('productssssssss', products);

  const auth = useSelector(state => state.auth);
  console.log(auth.user);

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  let publicUrl = process.env.PUBLIC_URL + '/';
  const inlineStyle = {
    backgroundImage: 'url(' + publicUrl + 'assets/img/page-title-bg.png)',
  };
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '-30px' }}>
        <div>
          <div className="breadcrumb-area" style={inlineStyle}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-inner">
                    <h1 className="page-title">Boutique</h1>
                    <ul className="page-list">
                      <li>
                        <Link to="/">Retourner au accueil</Link>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <div className="shop-page-area pd-top-120">
          <div className="container">
            <div className="row custom-gutters-60">
              <div className="col-lg-8">
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <div className="woocommerce-result-count">Showing 1–12 of 25 results</div>
                  </div>
                  <div className="col-sm-6 mg-bottom-30">
                    <select className="select woocommerce-sorting-select float-sm-right">
                      <option value={1}>Default sorting</option>
                      <option value={2}>Sort by latest</option>
                      <option value={3}>Sort by rating</option>
                    </select>
                  </div>
                  {products != null ? products.map(item => <OneProduct {...item} />) : true}
                </div>
              </div>
              <ProductSidebar />
            </div>
          </div>
        </div>
        <Footer_V2 />
      </div>
    </>
  );
}

export default ShopPage;
