import axios from "axios";

const apiClient = axios.create({
  //baseURL: 'http://springbootjwtauthentication-env.eba-wrpyhiqe.us-east-1.elasticbeanstalk.com',
  baseURL: "http://127.0.0.1:5000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {

    logIn(userCredential) {
    const data = JSON.stringify(userCredential);

    return apiClient
      .post("/auth", data)
      .then((response) => {
        // return Promise.resolve(response);
        return response;
      })
      .catch((error) => {
        // return Promise.reject(error);
        throw error;
      });
  },

  logOut() {
    // do log out
  },

  register(userData) {
    return apiClient.post("/signup", userData)
      .then( (response) => {
        return response;
      })
      .catch( (error) => {
        throw error;
      });

  },
};
