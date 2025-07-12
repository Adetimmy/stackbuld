'use client'
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./api";

export const fetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => await getProducts(),
  });
};
