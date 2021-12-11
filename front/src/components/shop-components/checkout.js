import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import { useStateValue } from '../../StateProvider';
import FooterV2 from '../global-components/footer-v2';
import Navbar from '../global-components/navbar';
import { addDemandeAchat } from '../../actions/demandeAchat';
import './popupStyle.css';
import { useDispatch } from 'react-redux';

const ShopDetails = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  const dispatch = useDispatch();
  const [{ basket, user }, dispatchb] = useStateValue();
  let totalA = [];
  let total = 0;

  const calc = () => {
    basket.map(el => {
      totalA.push(el.prix);
    });

    if (totalA !== null) {
      totalA.map(el => {
        total = total + el;
      });
    }
    return Number.parseFloat(total).toFixed(2);
  };
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    adress: '',
    city: '',
    ville: '',
    phoneNumber: '',
    codePostal: '',
    total: calc(),
    productId: basket,
    createdAt: Date.now(),
  });
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  let totalAfficher = calc();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(totalAfficher);
    dispatch(addDemandeAchat(input));
  };

  const inlineStyle = {
    backgroundImage: 'url(' + publicUrl + 'assets/img/page-title-bg.png)',
  };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <div style={{ marginTop: '-30px' }}>
        <div>
          <div className="breadcrumb-area" style={inlineStyle}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-inner">
                    <h1 className="page-title">Checkout</h1>
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
      <div className="checkout-page-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="checkout-form-wrap">
                <div className="checkout-title">
                  <div className="row">
                    <div className="col-xl-5 col-lg-12 col-md-6">
                      <h6>Contact information</h6>
                    </div>
                    <div className="col-xl-7 col-lg-12 col-md-6 text-xl-right text-lg-left text-md-right">
                      <span>Already have an account?</span>
                      <a>
                        <Link to="/login">Sign in /</Link>
                      </a>
                      <a>
                        <Link to="/register">Sign Up</Link>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="checkout-form">
                  <form className="riyaqas-form-wrap">
                    <div className="row custom-gutters-20">
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="email" placeholder="E-mail" onChange={handleChange} />
                          <label>E-mail</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="firstName" placeholder="Nom" onChange={handleChange} />
                          <label>First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="lastName" placeholder="Prénom" onChange={handleChange} />
                          <label>Last Name</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="adress" placeholder="Adress" onChange={handleChange} />
                          <label>Address</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="ville" placeholder="Ville" onChange={handleChange} />
                          <label>Ville</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <select className="select single-select">
                            <option value={1}>Country</option>
                            <option value={2}>Canada</option>
                            <option value={3}>Japan</option>
                            <option value={3}>China</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="codePostal" placeholder="Code Postal" onChange={handleChange} />
                          <label>Code Postal </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input
                            type="text"
                            className="single-input"
                            name="phoneNumber"
                            placeholder="Numéro de téléphone"
                            onChange={handleChange}
                          />
                          <label>Numéro de téléphone</label>
                        </div>
                      </div>

                      <div className="col-12 text-right">
                        <a className="btn btn-green" href="#" onClick={handleSubmit}>
                          Place Order
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="checkout-form-product">
                <div className="order-table ">
                  <table className="table">
                    <tbody>
                      {basket !== null
                        ? basket.map(el => (
                            <tr>
                              <td>
                                <div className="media single-cart-product">
                                  <div className="media-left">
                                    <img style={{ width: '100px' }} src={el.image} alt="img" />
                                  </div>
                                  <div className="media-body">
                                    <span> {el.name}</span>
                                    <p> {el.name}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="cart-product-price text-center">{el.prix} TND </td>
                            </tr>
                          ))
                        : true}
                    </tbody>
                  </table>
                  <div className="total-shapping-area-wrap">
                    <div className="total-shapping-area">
                      <div className="charge">
                        <span>Nomber de produits:</span>
                        {basket !== null ? <span className="amount float-right">{basket.length}</span> : true}
                      </div>
                      <div className="total-amount">
                        <span>Total:</span>
                        <span className="amount float-right">{totalAfficher} DT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
};

export default ShopDetails;
