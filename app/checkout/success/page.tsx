import SuccessCheck from "@/public/success-check";
import { CheckCircle, Package } from "lucide-react";
import Link from "next/link";

interface SeachProps {
  searchParams: { [key: string]: string };
}

export default function Success({ searchParams }: SeachProps) {
  const orderId = searchParams.orderId;
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center">
        <SuccessCheck />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Package className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Order ID</span>
          </div>
          <p className="text-xl font-mono font-bold text-gray-900">{orderId}</p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            You will receive an email confirmation shortly with your order
            details.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
