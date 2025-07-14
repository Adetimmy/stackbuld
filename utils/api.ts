import axios, { AxiosError } from 'axios';
import { Product } from '../utils/types';

const PRODUCT_KEY = 'STACKBULD_PRODUCTS';

const seedProductsToLocalStorage = (products: Product[]) => {
  const existingProducts = localStorage.getItem(PRODUCT_KEY) as string;
  if (!existingProducts) {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    // get stored dta from localstorage
    const existedProducts = localStorage.getItem(PRODUCT_KEY);
    if (existedProducts) {
      return JSON.parse(existedProducts);
    }
    // if not data exist yet in localstorage, fallback to fetch data and stored in localstorage
    const res = await axios.get<Product[]>('/products.json');
    if (res.status === 200 || res.status === 304) {
      seedProductsToLocalStorage(res.data);
      return res.data;
    }
    throw new Error('product not found');
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Network error:', error.message);
      throw new Error(
        error.response?.data?.message || 'Failed to fetch products'
      );
    }

    if (error instanceof Error) {
      console.error('Unexpected error:', error.message);
      throw error;
    }

    throw new Error('Unknown error occurred while fetching products');
  }
};
