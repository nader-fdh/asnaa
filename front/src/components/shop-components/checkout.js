import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/productAction';
import sectiondata from '../../data/sections.json';
import FooterV2 from '../global-components/footer-v2';
import Navbar from '../global-components/navbar';
import { addDemandeAchat, getDemandeAchat } from '../../actions/demandeAchat';
import { getDevis } from '../../actions/devisAction';

const ShopDetails = ({ match }) => {
  const product = useSelector(state => state.products.product);

  let publicUrl = process.env.PUBLIC_URL + '/';
  const dispatch = useDispatch();

  const demandeAchat = useSelector(state => state.products.demandeAchats);
  console.log('test test', demandeAchat);
  const id = match.params.id;
  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getDemandeAchat());
  }, [dispatch]);
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addDemandeAchat(input));
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
    productName: product.name,
    productId: product.id,
    createdAt: Date.now(),
  });
  console.log('inputsssss', input);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
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
                  </div>
                </div>
                <div className="checkout-form">
                  <form className="riyaqas-form-wrap" onSubmit={handleSubmit}>
                    <div className="row custom-gutters-20">
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="email" value={input.email} onChange={handleChange} />
                          <label>E-mail</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="firstName" value={input.firstName} onChange={handleChange} />
                          <label>First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="lastName" value={input.lastName} onChange={handleChange} />
                          <label>Last Name</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="adress" value={input.adress} onChange={handleChange} />
                          <label>Address</label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="city" value={input.city} onChange={handleChange} />
                          <label>City</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <select className="select single-select" name="ville" value={input.ville} onChange={handleChange}>
                            <option value={1}>Country</option>
                            <option value={2}>Canada</option>
                            <option value={3}>Japan</option>
                            <option value={3}>China</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input type="text" className="single-input" name="codePostal" value={input.codePostal} onChange={handleChange} />
                          <label>Postal code</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input
                            type="text"
                            className="single-input"
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={handleChange}
                          />
                          <label>Phone</label>
                        </div>
                      </div>

                      <div className="col-12 text-right">
                        <button type="submit" className="btn btn-green">
                          passe demande
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="checkout-form-product">
                <div className="order-table table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="media single-cart-product">
                            <div className="media-left">
                              <img src={product.image} alt="img" />
                            </div>
                            <div className="media-body">
                              <span>{product.name}</span>
                              <p>{product.createdAt}</p>
                            </div>
                          </div>
                        </td>
                        <td className="cart-product-price text-center">$150.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="total-shapping-area-wrap">
                    <div className="total-shapping-area">
                      <div className="charge">
                        <span>Shipping Charge:</span>
                        <span className="amount float-right">$1.00</span>
                      </div>
                      <div className="total-amount">
                        <span>Total:</span>
                        <span className="amount float-right">$151.00</span>
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
