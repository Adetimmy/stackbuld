"use client";

import Link from "next/link";
import { ShoppingCart, Store } from "lucide-react";
import useCartStore from "@/store/cart-store";

export default function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900"
          >
            <Store className="h-6 w-6" />
            <span>Stackbuld Store</span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              href="/cart"
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
