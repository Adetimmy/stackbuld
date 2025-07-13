# Stackbuld E-commerce

A modern, client-side e-commerce built with Next.js 14, featuring a complete shopping experience with persistent cart state and mock checkout functionality.

## Project Overview

Mini-Commerce is a fully functional e-commerc that demonstrates modern web developments practices. The application provides:

- **Product Catalgue**: Brose 10 curated products with detailed information
- **Product Details**: Individual product pages with comprehensive information
- **Shopping Cart**: Full cart management with quantity controls and persistence
- **Checkout Flows**: Complete mock checkout process with order confirmation
- **Responsise Design**: Mobile-first approach ensuring optimal experience across all devices

### Key Features
-  Client-side data persistence using localStorage
-  Real-time cart updates with Zustand state management
-  Optimistic UI updates and error recovery
-  SEO-optimized pages with meta tags and structured data
-  Comprehensive error handling and loading states
-  Accessibility-first design with keyboard navigation


## Design Approach

### Layout Strategy
The design follows a **mobile-first responsive approach** using CSS Grid and Flexbox:

- **Grid System**: Products displayed in responsive grids (1-4 columns based on screen size)
- **Card-Based UI**: Consistent card components for products and cart items
- **Sticky Navigation**: Header remains accessible during scrolling
- **Hierarchical Typography**: Clear information hierarchy with proper heading structure

### Color Palette & Visual Design
- **Semantic Colors**: Green for success states, red for errors/removal actions
- **High Contrast**: Ensures WCAG AA compliance for accessibility

## Tools & Techniques

### Core Technologies
- **Next.js 14** (App Router): Server-side rendering and routing
- **React 18**: Component architecture with hooks and context
- **TypeScript**: Strict type safety with comprehensive interfaces
- **Tailwind CSS**: Utility-first styling with custom design tokens

### State Management & Data
- **Zustand**: Lightweight state management with persistence middleware
- **TanStack Query**: Server state management with caching and background updates
- **localStorage**: Client-side persistence for cart and product data

### Development Patterns
- **Component Composition**: Reusable, composable UI components
- **Custom Hooks**: Encapsulated logic for cart operations and data fetching
- **Error Boundaries**: Graceful error handling at component level
- **Optimistic Updates**: Immediate UI feedback with rollback capabilities

### Testing Strategy
- **Jest + React Testing Library**: Unit and integration testing
- **Component Testing**: Isolated component behavior verification
- **Accessibility Testing**: Screen reader and keyboard navigation validation
- **Type Safety**: Compile-time error prevention with TypeScript

### Code Quality
- **ESLint**: Code linting with Next.js and TypeScript rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality assurance
- **Path Mapping**: Clean imports with \`@/\` alias

## SEO Strategy

### Meta Tags & Open Graph
- **Dynamic Meta Tags**: Page-specific titles and descriptions
- **Open Graph Protocol**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing experience
- **Canonical URLs**: Proper URL structure for search engines

### Structured Data
- **JSON-LD Schema**: Product and organization markup
- **Rich Snippets**: Enhanced search result appearance
- **Breadcrumb Navigation**: Clear site hierarchy for crawlers

### Performance Optimizations
- **Next.js Image**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for faster loading
- **Resource Hints**: Preloading critical resources

### Core Web Vitals
- **LCP Optimization**: Hero images optimized for fast loading
- **CLS Prevention**: Proper image dimensions and skeleton loading
- **FID Improvement**: Minimal JavaScript execution on main thread

## Error-Handling Technique

### Error Surface Strategy
- **User-Friendly Messages**: Clear, actionable error descriptions
- **Visual Indicators**: Consistent error states with icons and colors
- **Contextual Help**: Specific guidance based on error type
- **Graceful Degradation**: Fallback content when features fail

### Error Recovery Mechanisms
- **Retry Functionality**: One-click retry for failed network requests
- **Optimistic Rollback**: Automatic state restoration on operation failure
- **Cache Fallbacks**: Serve stale data when fresh data unavailable
- **Progressive Enhancement**: Core functionality remains available

### Error Logging & Monitoring
- **Console Logging**: Detailed error information in development
- **Error Boundaries**: Component-level error isolation
- **Network Error Handling**: Specific handling for API failures
- **State Validation**: Runtime type checking for critical operations

### Specific Error Scenarios
- **Product Not Found**: Custom 404 pages with navigation options
- **Cart Persistence Failure**: Graceful fallback to session storage
- **Network Timeouts**: Retry mechanisms with exponential backoff
- **Invalid Product Data**: Data validation with user feedback

### Recovery Patterns
\`\`\`typescript
// Example error recovery pattern
const { data, error, refetch } = useProducts()

if (error) {
  return (
    <ErrorMessage 
      message="Failed to load products" 
      onRetry={() => refetch()} 
    />
  )
}
\`\`\`

## Getting Started Running App

\`\`\`bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
\`\`\`

## 📁 Project Structure

\`\`\`
mini-commerce/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── lib/                   # Provider and querires
├── utils/                 # api, types, and custom function
├── public/                # Static assets and product data
├── store/                 # Store
├── __tests__/             # Test file
└── README.md              # Project documentation
\`\`\`
