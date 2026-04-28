'use client';

import { useState } from 'react';
import {
  Header,
  ProductCard,
  FilterSidebar,
  CartSidebar,
  FavoritesSidebar,
  ProductModal,
  Toast,
} from '@/components';
import { useCart, useFavorites, useProductFilters } from '@/hooks';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  // State hooks
  const { cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useCart();
  const { favorites, toggleFavorite, isFavorite, favoriteCount } = useFavorites();
  const { filters, filteredProducts, updateFilters, toggleCategory, resetFilters } =
    useProductFilters(PRODUCTS);

  const handleAddToCart = (product: Product, quantity = 1) => {
    addToCart(product, quantity);
    setShowToast({
      message: `Added ${quantity}x ${product.name} to cart`,
      type: 'success',
    });
  };

  const handleCheckout = () => {
    alert(`Checkout: $${cartTotal.toFixed(2)}\n\nThis is a demo!`);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        cartCount={cartCount}
        favoriteCount={favoriteCount}
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <div className="flex gap-6 p-4">
          {/* Filters Sidebar */}
          <FilterSidebar
            filters={filters}
            onUpdateFilters={updateFilters}
            onToggleCategory={toggleCategory}
            onResetFilters={resetFilters}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Info */}
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-2">
                {filteredProducts.length > 0
                  ? `${filteredProducts.length} Product${
                      filteredProducts.length !== 1 ? 's' : ''
                    } Found`
                  : 'No Products Found'}
              </h2>
              <p className="text-sm text-gray-600">
                {filters.searchQuery && `Searching for: "${filters.searchQuery}"`}
                {filters.category.length > 0 && (
                  <span>
                    {filters.searchQuery ? ', ' : ''}in {filters.category.join(', ')}
                  </span>
                )}
                {filters.inStockOnly && ' (In Stock Only)'}
              </p>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} onClick={() => setSelectedProduct(product)}>
                    <ProductCard
                      product={product}
                      isFavorite={isFavorite(product.id)}
                      onToggleFavorite={toggleFavorite}
                      onAddToCart={() => handleAddToCart(product)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <p className="text-3xl mb-3">🔍</p>
                  <p className="text-gray-600 mb-2">No products match your criteria</p>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-gray-900 hover:underline font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Sidebars */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onCheckout={handleCheckout}
      />

      <FavoritesSidebar
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        products={PRODUCTS}
        onRemoveFromFavorites={toggleFavorite}
        onAddToCart={handleAddToCart}
      />

      {/* Product Modal */}
      <ProductModal
        isOpen={selectedProduct !== null}
        product={selectedProduct}
        isFavorite={selectedProduct ? isFavorite(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onToggleFavorite={toggleFavorite}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message={showToast.message}
          type={showToast.type}
          onClose={() => setShowToast(null)}
        />
      )}
    </div>
  );
}

