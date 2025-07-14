import { Metadata } from 'next';
import { Product } from './utils/types';

export const baseUrl = 'https://stackbuld-psi.vercel.app';

export const PageMetaData = {
  Home: {
    title: {
      default: 'Stackbuld Premium Electronics & Accessories',
      template: 'Stackbuld - %s ',
    },
    description:
      'Discover high-quality electronics, wearables, and home accessories at competitive prices.',
    keywords: ['electronics', 'wearables', 'home accessories', 'shopping'],
    openGraph: {
      title: 'Stackbuld: Premium Electronics & Accessories',
      description: 'Discover high-quality products at competitive prices.',
      url: baseUrl,
      siteName: 'stackbuld',
      images: [
        {
          url: `${baseUrl}/favicon.ico`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_NG',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },

    twitter: {
      card: 'summary_large_image',
      title: 'Stackbuld Premium Electronics & Accessories',
      description: 'Discover high-quality products at competitive prices.',
      images: [`${baseUrl}/favicon.ico`],
    },
    metadataBase: new URL(baseUrl),
  },

  ProductsJSONLD: (products: Product[]) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          url: `${baseUrl}/products/${product.slug}`,
          image: product.image,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'NGN',
            price: product.price,
            availability: product.inStock
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
          },
        },
      })),
    };
  },

  ProductSlug: (product: Product): Metadata => {
    return {
      title: `${product.name}`,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [product.image],
        // type: 'product',
      },
      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description: product.description,
        images: [product.image],
      },
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: `/product/${product.slug}`,
      },
    };
  },

  ProductSlugJSONLD: (product: Product) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: product.image,
      description: product.description,
      brand: {
        '@type': 'Brand',
        name: 'Stackbuld',
      },
      offers: {
        '@type': 'Offer',
        url: `${baseUrl}/products/${product.slug}`,
        priceCurrency: 'NGN',
        price: product.price,
        itemCondition: 'https://schema.org/NewCondition',
        availability: product.inStock
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      },
    };
  },
};
