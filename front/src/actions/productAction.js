import {
  Add_PRODUCT_SUCCESS,
  Add_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  CHECK_USER,
  GET_USER_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
} from './types';

import axios from 'axios';

// Function get product
export const getProduct = () => dispatch => {
  axios
    .get('/product')
    .then(res =>
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err => console.log(err));
};

//get single product
export const getSingleProduct = id => async dispatch => {
  try {
    const { data } = await axios.get(`/product/${id}`);
    dispatch({
      type: GET_SINGLE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

//  Function add product
export const addProduct = (data, files) => async dispatch => {
  try {
    let filesArray = Object.values(files);
    console.log(filesArray);
    let formData = new FormData();
    // data contains the user inputs
    formData.append('input', JSON.stringify(data));
    // formData.append('photos', filesArray);
    filesArray.map(file => formData.append('photos', file));
    const res = await axios.post('/product', formData);
    dispatch(getProduct());
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};
// function delete product

export const deleteProduct = id => dispatch => {
  axios
    .delete(`/product/${id}`)
    .then(res => dispatch(getProduct()))
    .catch(err => console.log(err));
};

// function update product

export const updateProduct = (id, updatedProduct) => dispatch => {
  axios
    .put(`/product/${id}`, updatedProduct)
    .then(res => dispatch(getProduct()))
    .catch(err => console.log(err));
};

// function get all users
export const getUsers = () => dispatch => {
  axios
    .get('/product/user')
    .then(res =>
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err => console.log(err));
};
