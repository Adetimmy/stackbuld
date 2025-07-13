import { render, screen } from "@testing-library/react"
import ProductCard from "@/components/product-card"
import type { Product } from "@/utils/types"

const mockProduct: Product = {
  id: "1",
  slug: "test-product",
  name: "Test Product",
  price: 99.99,
  image: "/test-image.jpg",
  description: "This is a test product description",
  category: "Test Category",
  inStock: true,
  features: ["Feature 1", "Feature 2"],
}

describe("Product Card", () => {
  it("render product card ppt correctly", () => {
    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText("Test Product")).toBeInTheDocument()
    expect(screen.getByText("This is a test product description")).toBeInTheDocument()
    expect(screen.getByText("₦99.99")).toBeInTheDocument()
    expect(screen.getByText("Test Category")).toBeInTheDocument()
    expect(screen.getByAltText("Test Product")).toBeInTheDocument()
  })

  it("has correct link routing to product page", () => {
    render(<ProductCard product={mockProduct} />)

    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/product/test-product")
  })

  it("applies hover styles correctly", () => {
    render(<ProductCard product={mockProduct} />)

    const card = screen.getByRole("link")
    expect(card).toHaveClass("group")
  })
})

