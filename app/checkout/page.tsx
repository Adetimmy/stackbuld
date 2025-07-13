"use client";
import useCartStore from "@/store/cart-store";
import { convertToNaira } from "@/utils/useCurrency";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // generate random orderId
    const orderId = Math.random().toString(36).substring(2, 17).toUpperCase();
    clearCart();
    router.push(`/checkout/success?orderId=STB.${orderId}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid place-items-center text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cart.map((item, i) => (
              <div
                key={item.id}
                className={`flex items-center space-x-4 ${
                  cart.length > i + 1 ? "border-b pb-4" : null
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-medium text-gray-900">
                  {convertToNaira(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{convertToNaira(getTotalPrice())}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handlePlaceOrder}
          disabled={isProcessing}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isProcessing
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isProcessing ? "Processing Order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
