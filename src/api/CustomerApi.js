import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/customers/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/customers/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/customers/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const update = async (data) => {
  try {
    const result = await axios.put(`${config.domain}/customers/${data.id}`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/customers/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { list, deleted, create, update, findOne };
