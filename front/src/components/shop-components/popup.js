import React from 'react';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../../reducers/reducerBasket';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import './popupStyle.css';
import Subtotal from './Subtotal';

const Popup = props => {
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

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatchb({
      type: 'REMOVE_FROM_BASKET',
      id: basket.id,
    });
  };
  console.log('popup', props);
  return (
    <div className="popup-box" style={{ marginTop: '300px !important' }}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>
          <div className="order-table ">
            <div className="checkout-title text-center mb-0">
              <h3 style={{ color: 'black' }}>Your Order</h3>
            </div>
            <div className="orderBody">
              <div className="row">
                <div className="col-md-7">
                  {basket !== null
                    ? basket.map(el => (
                        <div className="cardContent">
                          <div className="cardSinglePro ">
                            <div className="media-left imageStyle">
                              <img src={el.image} alt="img" />
                            </div>
                            <div className="media-body imageStyle">
                              <span onClick={removeFromBasket}>
                                <h3> {el.name}</h3>
                              </span>
                              <p> {el.prix} TND </p>
                            </div>
                          </div>
                        </div>
                      ))
                    : true}
                </div>

                <div className="col-md-5 secondSection">
                  <div style={{ color: 'black' }} className="row">
                    <div className="col-md-6">
                      <h4 style={{ color: 'black' }}>total</h4>
                    </div>
                    <div className="col-md-6">
                      <h4 style={{ color: 'black' }}>{calc()}</h4>
                    </div>
                  </div>

                  <div className="">
                    <div className="total-shapping-area">
                      <div className="charge">
                        <Link to="/shop" className="boutton" onClick={props.handleClose}>
                          Continuez vos achats
                        </Link>
                      </div>
                      <div className="total-amount">
                        <Link to="/checkout" className="boutton">
                          Allez aux checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
