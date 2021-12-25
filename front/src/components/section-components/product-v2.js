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
import './ModalViewDemandeAchats.css';

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
      <>
        <div className="shop-area mg-top-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-9">
                <div className="section-title style-two text-center">
                  <h2 className="title">
                    Product <span>fabnation</span>
                  </h2>
                  <p>
                    <ModalEdit check={false} />
                  </p>
                </div>
              </div>
            </div>
            <div className="row displayProducts">
              {products != null
                ? products.map(el => (
                    <div className="cardProd">
                      <img src={el.image} />
                      <div className="cardProd-body">
                        <h2>
                          {el.name}: Prix {el.prix}DT
                        </h2>
                        <p>{el.description}</p>
                        <h5>{el.prix} DT</h5>
                      </div>
                      <div className="cardProd-footer">
                        <ModalEdit products={el} check={true} />
                        <p className="float-right supprimer" onClick={() => dispatch(deleteProduct(el._id))}>
                          Supprimer <HighlightOffIcon />
                        </p>
                      </div>
                    </div>
                  ))
                : true}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
