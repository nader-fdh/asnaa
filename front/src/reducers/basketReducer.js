import {
  GET_PRODUCT_SUCCESS,
  GET_BASKET_SUCCESS,
  GET_USER_SUCCESS,
  GET_DEVIS_SUCCESS,
  GET_DEVIS_FAIL,
  GET_ALLDEVIS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_BASKET_FAIL,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_BASKET_SUCCESS,
  GET_DEMANDEACHAT_SUCCESS,
} from '../actions/types';

const initState = {
  baskets: [],
  basket: {},
};

const basketReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BASKET_SUCCESS:
      return {
        ...state,
        baskets: action.payload,
      };

    case GET_BASKET_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_SINGLE_BASKET_SUCCESS:
      return {
        ...state,
        basket: action.payload,
      };
    default:
      return state;
  }
};

export default basketReducer;
