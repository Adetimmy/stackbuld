import axios, { AxiosError } from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get("/products.json");
    if (res.statusText === "OK") {
      return { data: res.data, error: null };
    }
    return { data: null, error: res.data };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.message ?? error.response?.data, data: null };
    }
    return { error: "Something went wrong, try again later", data: null };
  }
};
