"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./api";
import { Product } from "./types";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => await getProducts(),
  });
};

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: async () => {
      const products = await getProducts();
      if (Array.isArray(products)) {
        const product = products?.find((product) => product.slug === slug);
        if (!product) {
          throw new Error("Product not found");
        }
        return product;
      }
    },
  });
};
