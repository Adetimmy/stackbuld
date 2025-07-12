export interface Product {
  id: string
  slug: string
  name: string
  price: number
  image: string
  description: string
  category: string
  inStock: boolean
  features: string[]
}

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  slug: string
}

export interface CartState {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  createdAt: string
}
