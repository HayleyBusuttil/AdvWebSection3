'use client';

import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAddedFeedback, setShowAddedFeedback] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setShowAddedFeedback(true);
    setTimeout(() => setShowAddedFeedback(false), 2000);
  };

  return (
    <div
      className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white hover:border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Area */}
      <div className="relative bg-gray-50 aspect-square flex items-center justify-center overflow-hidden">
        <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </div>

        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}

        {/* Favorite Button - Always Visible */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition z-10"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <span className="text-lg">{isFavorite ? '♥' : '♡'}</span>
        </button>

        {/* Add to Cart Button - Show on Hover */}
        {product.inStock && (
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-3 left-3 right-3 py-2 px-4 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } ${showAddedFeedback ? 'bg-green-600' : ''}`}
          >
            {showAddedFeedback ? '✓ Added' : 'Add to Cart'}
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-700">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">${product.price}</span>
          <span className="text-xs font-medium text-gray-500 uppercase">{product.category}</span>
        </div>
      </div>
    </div>
  );
}
