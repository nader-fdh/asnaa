import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducers/reducerBasket';

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong> {value} </strong>
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
      />
      <button onClick={e => history.push('/payment')}>Preceed to checkout</button>
    </div>
  );
};

export default Subtotal;
