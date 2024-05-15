import axios from "axios";

export const fetchDelete = (url) => axios.delete(url).then((res) => res.data);

export const fetchPost = (url) => axios.post(url).then((res) => res.data);

export const fetchGet = (url) => axios.get(url).then((res) => res.data);

export const fetchPostOrder = ({ url, alamat }) =>
  axios.post(url, { location: alamat }).then((res) => res.data);
