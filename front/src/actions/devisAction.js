import axios from 'axios'
import { GET_DEVIS_FAIL, GET_DEVIS_SUCCESS, GET_ALLDEVIS_SUCCESS } from './types';

export const devisInput = (data,files) =>async(dispatch)=>{
    try {
        let filesArray = Object.values(files);
        console.log(filesArray)
        let formData = new FormData();
        // data contains the user inputs
        formData.append('input', JSON.stringify(data));
        // formData.append('photos', filesArray);
        filesArray.map((file) => formData.append('photos', file));
        const res = await axios.post('/devis',formData)
        dispatch({type:GET_DEVIS_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:GET_DEVIS_FAIL,payload:error})
    }
}

// get all devis
export const getDevis = () => (dispatch) => {
    axios
      .get("/devis")
      .then((res) =>
        dispatch({
          type: GET_ALLDEVIS_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };