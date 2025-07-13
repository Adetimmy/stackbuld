import useCartStore from "@/store/cart-store";
import { convertToNaira } from "@/utils/useCurrency";
import { MinusCircle, PlusCircle, Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartItem() {
  const { cart, updateQuantity, removeItem } = useCartStore();
  return (
    <div className="lg:col-span-2 space-y-4">
      {cart.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <Link
                href={`/product/${item.slug}`}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600"
              >
                {item.name}
              </Link>
              <p className="text-gray-600 mt-1">
                {convertToNaira(item.price)} each
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:shadow-md transition-shadow"
                aria-label="Decrease quantity"
              >
                <MinusCircle className="h-4 w-4" />
              </button>

              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>

              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:shadow-md transition-shadow"
                aria-label="Increase quantity"
              >
                <PlusCircle className="h-4 w-4" />
              </button>
            </div>

            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">
                {convertToNaira(item.price * item.quantity)}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:text-red-700 mt-2 inline-flex items-center space-x-1 text-sm"
              >
                <Trash2Icon className="h-4 w-4" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
