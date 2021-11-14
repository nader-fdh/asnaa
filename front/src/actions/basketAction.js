import { GET_BASKET_SUCCESS, GET_BASKET_FAIL, GET_SINGLE_BASKET_SUCCESS } from './types';

import axios from 'axios';

// Function get BASKET
export const getBasket = () => dispatch => {
  axios
    .get('/basket')
    .then(res =>
      dispatch({
        type: GET_BASKET_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err => console.log(err));
};

//get single BASKET
export const getSingleBasket = id => async dispatch => {
  try {
    const { data } = await axios.get(`/basket/${id}`);
    dispatch({
      type: GET_SINGLE_BASKET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

//  Function add BASKET
export const addBasket = (data, files) => async dispatch => {
  try {
    let filesArray = Object.values(files);
    console.log(filesArray);
    let formData = new FormData();
    // data contains the user inputs
    formData.append('input', JSON.stringify(data));
    // formData.append('photos', filesArray);
    filesArray.map(file => formData.append('photos', file));
    const res = await axios.post('/basket', formData);
    dispatch(getBasket());
  } catch (error) {
    dispatch({ type: GET_BASKET_FAIL, payload: error });
  }
};
// function delete BASKET

export const deleteBasket = id => dispatch => {
  axios
    .delete(`/basket/${id}`)
    .then(res => dispatch(getBasket()))
    .catch(err => console.log(err));
};

// function update basket

export const updateBasket = (id, updatedBasket) => dispatch => {
  axios
    .put(`/basket/${id}`, updatedBasket)
    .then(res => dispatch(getBasket()))
    .catch(err => console.log(err));
};
