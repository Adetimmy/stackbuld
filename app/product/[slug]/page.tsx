"use client";

import { useProduct } from "@/lib/queries";
import useCartStore from "@/store/cart-store";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import LoadingSpinner from "@/components/loader-spinner";
import ErrorMessage from "@/components/error-message";
import { convertToNaira } from "@/utils/useCurrency";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { data: product, isLoading, error, refetch } = useProduct(params.slug);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container py-8">
        <ErrorMessage
          message="Product not found or failed to load."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-8">
        <ErrorMessage message="Product not found." />
      </div>
    );
  }

  return (
    <article className="container lg:py-8">
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Products</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <figure className="aspect-square overflow-hidden rounded-lg shadow-md bg-white grid place-items-center">
          <Image
            src={
              product.image ||
              `https://placehold.co/400x400?text=${product.name.replaceAll(
                " ",
                "+"
              )}`
            }
            alt={product.name}
            width={600}
            height={600}
            className="w-8/12 h-auto object-cover"
            priority
          />
        </figure>

        <div className="space-y-6">
          <figcaption>
            <span className="text-sm text-blue-600 font-medium">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-gray-900 mt-4">
              {convertToNaira(product.price)}
            </p>
          </figcaption>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center space-x-4 mb-4">
              <label
                htmlFor="quantity"
                className="text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              >
                {Array.from({ length: 10 }).map((num, i) => (
                  <option key={i} value={i + 1} >
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                isAdded
                  ? "bg-green-600 text-white"
                  : product.inStock
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="h-5 w-5" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  <span>
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
