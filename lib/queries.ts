'use client';
import { getProducts } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const products = await getProducts();
        return products;
      } catch (error) {
        console.error('Failed to fetch products:', error);
        throw new Error('Failed to load products. Please try again later.');
      }
    },
    retry: 3, //retries 3 times in case an failure,
    staleTime: 1000 * 60 * 5, // caching fected item for 5mins
  });
};

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['products', slug],
    queryFn: async () => {
      const products = await getProducts();
      const product = products.find((product) => product.slug === slug);

      if (!product) {
        throw new Error(`Product with slug "${slug}" not found`);
      }

      return product;
    },
    enabled: !!slug, // only activate the call when slug is not null/undined or included as a arg
    staleTime: 1000 * 60 * 5,
  });
};
