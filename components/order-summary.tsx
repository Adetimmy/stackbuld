import useCartStore from "@/store/cart-store";
import { convertToNaira } from "@/utils/useCurrency";
import Link from "next/link";
import React from "react";

export default function OrderSummary() {
  const { getTotalPrice, clearCart } = useCartStore();
  return (
    <div className="lg:col-span-1 text-gray-800">
      <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Summary
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">
              {convertToNaira(getTotalPrice())}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">VAT. incl.</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">
                {convertToNaira(getTotalPrice())}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/checkout"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-medium"
          >
            Proceed to Checkout
          </Link>

          <button
            onClick={clearCart}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
