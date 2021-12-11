import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducers/reducerBasket';

const Subtotal = props => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const test = () => {
    console.log('aaaaaaaaaaa', props.prix);
  };

  return (
    <div className="subtotal">
      {/* <CurrencyFormat
        renderText={value => (
          <>
            <p style={{ color: 'black !important' }}>
              Subtotal ({basket.length} items) : <strong> {p} </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}
      /> */}
      <button onClick={test}>Preceed to checkout</button>
    </div>
  );
};

export default Subtotal;
