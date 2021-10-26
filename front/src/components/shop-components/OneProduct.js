import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const OneProduct = ({ _id, name, prix, file }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log('hhhhhhhhhhh', basket);
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: _id,
        name: name,
        image: file[0],
        prix: prix,
      },
    });
  };
  return (
    <div key={_id} className="col-lg-4 col-sm-6">
      <div className="single-shop">
        <div className="thumb">
          <img src={file[0]} alt="image" />
          <div className="cart-btn">
            <div className="cart-btn-wrap">
              <Link onClick={addToBasket} className="btn btn-red">
                Ajouter panier <i className="fa fa-shopping-cart" />
              </Link>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <Link to={`/shop-details/${_id}`}>{name}</Link>
          <div className="price">
            <span>{prix}</span>
            <del></del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
