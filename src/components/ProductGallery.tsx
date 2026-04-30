'use client';

import { Product } from '@/types';
import { useState } from 'react';

interface ProductGalleryProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  isFavorite: boolean;
  onToggleFavorite: (productId: string) => void;
}

export function ProductGallery({
  product,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
}: ProductGalleryProps) {
  const [quantity, setQuantity] = useState(1);
  const ratingStars = Math.round(product.rating);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
        <div className="text-9xl">{product.image}</div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-light text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: ratingStars }).map((_, index) => (
                <img key={index} src="/icons/star.svg" alt="" aria-hidden="true" className="h-4 w-4" />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating} ({Math.round(product.rating * 100)} reviews)</span>
          </div>
        </div>

        <div className="border-t border-b border-gray-200 py-4">
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Price</p>
            <p className="text-3xl font-semibold text-gray-900">${product.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Availability</p>
            <p className={`text-lg font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>
        </div>

        {product.inStock && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => onToggleFavorite(product.id)}
                className={`py-3 px-6 rounded-lg font-medium border transition ${
                  isFavorite
                    ? 'bg-red-50 border-red-300 text-red-600 hover:bg-red-100'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                <img
                  src={isFavorite ? '/icons/heart-filled.svg' : '/icons/heart-outline.svg'}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
