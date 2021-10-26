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

function ShopPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  console.log('productssssssss', products);

  const auth = useSelector(state => state.auth);
  console.log(auth.user);

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <>
      <div style={{ backgroundColor: 'beige' }}>
        <Navbar />
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
