import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import sectiondata from '../../data/product.json';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ModalEdit from './Modal';
import { getProduct, deleteProduct } from '../../actions/productAction';
import { getDevis } from '../../actions/devisAction';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  console.log(products);

  const auth = useSelector(state => state.auth);
  console.log(auth.user);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      {auth.user != null ? (
        <>
          <div className="shop-area mg-top-110">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-9">
                  <div className="section-title style-two text-center">
                    <h2 className="title">
                      Product <span>fabnation</span>
                    </h2>
                    <p>aaaa</p>
                  </div>
                </div>
              </div>
              <div className="row custom-gutters-16">
                <div key="" className="col-lg-3 col-sm-6">
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      margin: '10px',
                    }}
                  >
                    {products != null
                      ? products.map(el => (
                          <div
                            style={{
                              flexDirection: 'row',
                              margin: '20px',
                            }}
                            className="single-shop style-two"
                          >
                            <Button onClick={() => dispatch(deleteProduct(el._id))}>
                              <HighlightOffIcon />
                            </Button>
                            <div className="thumb">
                              <img src={el.image} alt="" />
                              <div className="cart-btn">
                                <div className="cart-btn-wrap">
                                  <ModalEdit products={el} check={true} />
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <Link to="/admin/icons">{el.name}</Link>
                              <div className="price">
                                <span>
                                  <span>{el.description}</span> <br></br>
                                  <span>{el.prix}</span> <br></br>
                                  <span> Created at {el.createdAt}</span>
                                </span>

                                {/* <del>999995555</del> */}
                              </div>
                            </div>
                          </div>
                        ))
                      : true}

                    <div style={{ margin: '20px' }} className="single-shop style-two">
                      <div className="thumb">
                        <AddIcon />
                        <div className="cart-btn">
                          <div className="cart-btn-wrap" style={{ marginBottom: '100px' }}>
                            <ModalEdit check={false} />
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="price">
                          <span>Add a product..................................</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>you need to login</h1>
      )}
    </div>
  );
};

export default Product;
