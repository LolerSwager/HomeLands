import Axios from "axios";
import API_URL from "./API_URL";
import authHeader from "./auth-header";

const BaseUrl = "homelands";

const getList = (e) => {
  return Axios.get(`${API_URL}/${BaseUrl}/${e}`, {
    headers: authHeader(),
  });
};

const getDetail = (e, id) => {
  return Axios.get(`${API_URL}/${BaseUrl}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const post = (e, data) => {
  return Axios.post(`${API_URL}/${BaseUrl}/${e}`, data, {
    headers: authHeader(),
  });
};

const put = (e, data) => {
  return Axios.put(`${API_URL}/${BaseUrl}/${e}`, data, {
    headers: authHeader(),
  });
};

const login = async (username, password) => {
  return await Axios.post(`${API_URL}/token`, { username, password });
};

const logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

const update = async (e, id, data) => {
  return await Axios.put(`${API_URL}/${BaseUrl}/${e}/${id}`, data, {
    headers: authHeader(),
  });
};

const remove = (e, id) => {
  return Axios.delete(`${API_URL}/${BaseUrl}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const AppService = {
  getList,
  getDetail,
  put,
  update,
  remove,
  login,
  logout,
  post,
};

export default AppService;
