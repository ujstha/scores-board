import { httpBaseUtil } from "./httpBaseUtil";

export const fetch = url => {
  return httpBaseUtil().get(url);
};

export const store = (url, data) => {
  return httpBaseUtil().post(url, data);
};

export const update = (url, data) => {
  return httpBaseUtil().put(url, data);
};

export const destroy = id => {
  return httpBaseUtil().delete(`/${id}`);
};
