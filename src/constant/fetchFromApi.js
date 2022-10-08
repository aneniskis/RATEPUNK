import axios from "axios";

const BASE_URL = "https://api.jsonbin.io/v3/b/633fd91d65b57a31e68dd03c/latest";

const options = {
  headers: {
    "Content-Type": "application/json",
    "X-MASTER-KEY": `$2b$10$pudraR${process.env.REACT_APP_X_MASTER_KEY}`,
  },
};

export const fetchFromApi = async () => {
  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
};

const UPDATE_URL = "https://api.jsonbin.io/v3/b/633fd91d65b57a31e68dd03c";

export const updateApi = async (email) => {
  const { data } = await axios.put(`${UPDATE_URL}`, email, options);
  return data;
};
