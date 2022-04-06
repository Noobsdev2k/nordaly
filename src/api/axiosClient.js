import axios from "axios";
import queryString from "query-string";
 
const baseUrl = "https://fakestoreapi.com/products";
const axiosClient = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: baseUrl,
    headers: {
      "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });
  
  axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
  });
  
  axiosClient.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      // Handle errors
      console.log(error.message);
      throw error;
    }
  );
  
  export default axiosClient;