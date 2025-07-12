import axios, { AxiosError } from "axios";
import { Product } from "./types";

const PRODUCT_KEY = "STACKBULD_PRODUCTS";

const seedProductsToLocalStorage = (products: Product[]) => {
  const existingProducts = localStorage.getItem(PRODUCT_KEY) as string;
  if (!existingProducts) {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
  }
};

export const getProducts = async (): Promise<{
  data: Product[] | null;
  error: string | null;
}> => {
  try {
    // get stored dta from localstorage
    const existedProducts = localStorage.getItem(PRODUCT_KEY);
    if (existedProducts) {
      return JSON.parse(existedProducts);
    }
    // if not data exist yet in localstorage, fallback to fetch data and stored in localstorage
    const res = await axios.get("/products.json");
    if (res.statusText === "OK") {
      seedProductsToLocalStorage(res.data);
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
