import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/types"


interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
    >
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
        </div>
      </div>
    </Link>
  )
}
