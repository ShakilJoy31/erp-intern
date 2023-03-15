import { request } from "./clientApi";

export const URL = "https://kyloerp.herokuapp.com/api";

const userLogin = (callback, data) => {
  request(callback, URL + "/login", data, "POST");
};

const addressData = (callback, data) => {
  request(callback, `${URL}/buyer/address`, data, "POST");
};

const buyerLogin = (callback, data) => {
  request(callback, `${URL}/buyer/signIn`, data, "PUT");
};

const adminSellerLogin = (callback, data) => {
  request(callback, `${URL}/admin/create/seller-tradder`, data, "PUT");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  userLogin,
  buyerLogin,
  adminSellerLogin,
  addressData,
};
