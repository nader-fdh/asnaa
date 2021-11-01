import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import './popupStyle.css';

const Popup = props => {
  const [{ basket, user }, dispatchb] = useStateValue();
  console.log('popup', basket);
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>
          <div className="order-table ">
            <div className="checkout-title text-center mb-0">
              <h3 style={{ color: 'black' }}>Your Order</h3>
            </div>
            <table className="table">
              <tbody>
                {basket !== null
                  ? basket.map(el => (
                      <tr style={{ backgroundColor: 'beige' }}>
                        <td>
                          <div className="media single-cart-product">
                            <div className="media-left">
                              <img src={el.image} alt="img" />
                            </div>
                            <div className="media-body">
                              <span> {el.name} </span>
                              <p> {el.prix} </p>
                            </div>
                          </div>
                        </td>
                        <td className="cart-product-price text-center">{el.prix} </td>
                        <td className="text-center">
                          <div className="quantity-wrap">
                            <input
                              type="number"
                              id="quantity"
                              title="Qty"
                              className="input-text qty text"
                              name="quantity"
                              min="1"
                              max="5"
                            />
                            <div className="quantity">
                              {/* <input
                                type="number"
                                inputmode="numeric"
                                step={1}
                                min={0}
                                max={100}
                                defaultValue={1}
                                title="Qty"
                                className="input-text qty text"
                              /> */}
                            </div>
                          </div>
                        </td>
                        <td className="cart-product-price text-center">{el.prix}</td>
                        <td className="text-center">
                          <div className="cart-close">
                            <span className="ti-close" />
                          </div>
                        </td>
                      </tr>
                    ))
                  : true}
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
                  <span className="amount float-right">$451.00</span>
                </div>
              </div>
            </div>
            <div className="btn-wrapper text-center pd-top-170 riyaqas-nav">
              <Link className="btn btn-green" to="/checkout">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
