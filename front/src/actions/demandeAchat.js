import {
  Add_DEMANDEACHAT_SUCCESS,
  Add_DEMANDEACHAT_FAIL,
  DELETE_DEMANDEACHAT_SUCCESS,
  DELETE_DEMANDEACHAT_FAIL,
  UPDATE_DEMANDEACHAT_SUCCESS,
  UPDATE_DEMANDEACHAT_FAIL,
  GET_DEMANDEACHAT_SUCCESS,
  GET_DEMANDEACHAT_FAIL,
  GET_SINGLE_DEMANDEACHAT_SUCCESS,
} from './types';

import axios from 'axios';

// Function get demande achat
export const getDemandeAchat = () => dispatch => {
  axios
    .get('/demandeAchat')
    .then(res =>
      dispatch({
        type: GET_DEMANDEACHAT_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err => console.log(err));
};

//get single demande achat
export const getSingleDemandeAchat = id => async dispatch => {
  try {
    const { data } = await axios.get(`/demandeAchat/${id}`);
    dispatch({
      type: GET_SINGLE_DEMANDEACHAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

// function Add demande d'achat
export const addDemandeAchat = input => dispatch => {
  axios
    .post('/demandeAchat', input)
    .then(res => dispatch(getDemandeAchat()))
    .catch(err => console.log(err));
};

// function delete demande d'achat
export const deleteDemandeAchat = id => dispatch => {
  axios
    .delete(`/demandeAchat/${id}`)
    .then(res => dispatch(getDemandeAchat()))
    .catch(err => console.log(err));
};

// function update demande d'achat
export const updateDemandeAchat = (id, updatedDemandeAchat) => dispatch => {
  axios
    .put(`/demandeAchat/${id}`, updatedDemandeAchat)
    .then(res => dispatch(getDemandeAchat()))
    .catch(err => console.log(err));
};
