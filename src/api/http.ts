import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const instance = axios.create();

instance.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

async function request<T, D = any>(config: AxiosRequestConfig<D>): Promise<T> {
  try {
    const res = await instance.request(config);
    return res.data;
  } catch (err) {
    return ((err as AxiosError<T, D>)?.response?.data as T);
  }
}

export default request;
