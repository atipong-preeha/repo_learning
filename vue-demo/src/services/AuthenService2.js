import axios from "axios";

const apiClient = axios.create({
  //baseURL:"http://springbootjwtauthentication-env.eba-wrpyhiqe.us-east-1.elasticbeanstalk.com",
  baseURL: 'http://127.0.0.1:5000',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//const API_URL = '';
class AuthenService {
  logIn(user) {
    return apiClient
      .post("/auth", user)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  logOut() {
    // remove localstore
  }

  register(userData) {
    return apiClient
      .post("/register", userData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.data;
      });
  }

}

export default new AuthenService();
