import { CartItem, CartState, Product } from "@/utils/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItems = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingItems) {
            const newItem = state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );

            return { cart: newItem };
          }

          const newItem: CartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
            slug: product.slug,
          };

          return {
            cart: [...state.cart, newItem],
          };
        });
      },

      removeItem: (id: string) => {
        set((state) => {
          const updatedCart = state.cart.filter((item) => item.id !== id);
          return { cart: updatedCart };
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      //   get total items in the cart
      getTotalItems: () => {
        const totalItems = get().cart.length;
        const total = totalItems < 1 ? 0 : totalItems;
        return total;
      },

      getTotalPrice: () => {
        const cartList = get().cart;
        let totalPrice = 0;
        
        if (cartList.length === 0) return totalPrice;

        for (let i = 0; i < cartList.length; i++) {
          totalPrice += cartList[i].price * cartList[i].quantity;
        }
        return totalPrice;
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => {
          const updatedItem = state.cart.map((item) => {
            return item.id === id ? { ...item, quantity } : item;
          });
          return { cart: updatedItem };
        });
      },
    }),
    {
      name: "STACKBULD_CART",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
