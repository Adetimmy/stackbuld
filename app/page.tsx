"use client";

import ErrorMessage from "@/components/error-message";
import LoadingSpinner from "@/components/loader-spinner";
import ProductCard from "@/components/product-card";
import { useProducts } from "@/lib/queries";
import { PageMetaData } from "@/seo-config";
import { Product } from "@/utils/types";
import Script from "next/script";

export default function Home() {
  const { data: products, isLoading, error, refetch } = useProducts();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <div className="container py-8">
        <ErrorMessage
          message="Failed to load products. Please try again."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  if (!products) {
    return (
      <div className="container py-8">
        <ErrorMessage message="Product not found." />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.isArray(products) &&
        products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Script
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PageMetaData.ProductsJSONLD(products)),
        }}
      />
    </div>
  );
}
