import NotFound from '@/app/not-found';
import ProductPage from '@/components/product-slug';
import { baseUrl, PageMetaData } from '@/seo-config';
import type { Product } from '@/utils/types';
import { Metadata } from 'next';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const slug = params.slug;
  try {
    const res = await fetch(`${baseUrl}/products.json`);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    const products: Product[] = await res.json();
    const product = products.find((p) => p.slug === params.slug);

    if (product) {
      return { ...PageMetaData.ProductSlug(product) };
    }

    throw new Error(`Product not found for slug: ${slug}`);
  } catch (error) {
    console.error('Product Slug generated error =>', error);
    return {
      title: 'Product Not Found',
      description: 'View our product details',
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

export default function Product({ params }: ProductPageProps) {
  if (!params.slug) NotFound();

  return <ProductPage slug={params.slug} />;
}
