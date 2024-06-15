import axios from "axios";
import config from "config/app";
import { RequestConfig, RequestCustomError } from "types/request";

const { isProd } = config;
const API_URL = isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

const requestConfig: RequestConfig = {
  url: "",
  method: "get",
  baseURL: API_URL,
  transformRequest: [
    function transformRequest(data: any) {
      return data;
    },
  ],
  transformResponse: [
    function transformResponse(data: any) {
      return JSON.parse(data);
    },
  ],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {},
  timeout: 330000,
  withCredentials: false, // default
  responseType: "json", // default
  maxContentLength: 50000,
  validateStatus(status) {
    return status >= 200 && status < 300; // default
  },
  maxRedirects: 5, // default
};

const axiosClient = axios.create();

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const res = error.response;

    console.error("Looks like there was a problem.Status Code: " + res?.status);
    return Promise.reject(error);
  }
);

async function getRequestConfig(apiConfig?: any) {
  let config = Object.assign({}, requestConfig);

  if (apiConfig) config = { ...config, ...apiConfig };

  return config;
}

export const getCustomError = (err: any) => {
  const error: RequestCustomError = {
    message: "An unknown error occured",
  };
  if (err.response && err.response.data) {
    error.code = err.response.data.error;
    error.message = err.response.data.message;

    if (err.response?.status === 500) {
      error.message =
        "Lo sentimos, estamos experimentando problemas técnicos. Por favor, intenta nuevamente más tarde.";
    }
  } else if (!err.response && err.message) {
    error.message = err.message;
  }

  if (err.message === "Network Error") {
    error.message = "Network Error";
  }
  return error;
};

const getData = (data: any, apiConfig: any) =>
  apiConfig ? data : JSON.stringify(data);

export const getRequest = async (
  url: string,
  params?: object,
  apiConfig?: any
) => axiosClient.get(url, { ...(await getRequestConfig(apiConfig)), params });

export const postRequest = async (url: string, data: any, apiConfig?: any) =>
  axiosClient.post(url, getData(data, apiConfig), {
    ...(await getRequestConfig(apiConfig)),
  });

export const putRequest = async (url: string, data: any, apiConfig?: any) =>
  axiosClient.put(url, getData(data, apiConfig), {
    ...(await getRequestConfig(apiConfig)),
  });

export const deleteRequest = async (url: string) =>
  axiosClient.delete(url, await getRequestConfig());

export default axiosClient;
