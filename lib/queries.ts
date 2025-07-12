"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./api";
import { Product } from "./types";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => await getProducts()
  });
};
