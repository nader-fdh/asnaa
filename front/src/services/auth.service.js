import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (
  username,
  lastname,
  email,
  adress,
  phonenumber,
  codepostal,
  password
) => {
  return axios.post(API_URL + "signup", {
    username,
    lastname,
    email,
    adress,
    phonenumber,
    codepostal,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
