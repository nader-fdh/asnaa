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
  products: [],
  devis: [],
  product: {},
  users: [],
  demandeAchat: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DEMANDEACHAT_SUCCESS:
      return {
        ...state,
        demandeAchats: action.payload,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_DEVIS_SUCCESS:
      return {
        ...state,
        devis: action.payload,
      };
    case GET_ALLDEVIS_SUCCESS:
      return {
        ...state,
        allDevis: action.payload,
      };
    case GET_DEVIS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
