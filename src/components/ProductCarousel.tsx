'use client';

import { Product } from '@/types';
import { useState } from 'react';

interface ProductCarouselProps {
  products: Product[];
  title: string;
  onProductClick: (product: Product) => void;
}

export function ProductCarousel({
  products,
  title,
  onProductClick,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (products.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const product = products[currentIndex];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-light text-gray-900 mb-6">{title}</h2>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Image */}
          <div className="flex-1 bg-white flex items-center justify-center p-12 md:p-16 min-h-64">
            <button
              onClick={() => onProductClick(product)}
              className="text-9xl hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {product.image}
            </button>
          </div>

          {/* Details */}
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase mb-2">
                {product.category}
              </p>
              <h3 className="text-2xl font-light text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-700 ml-2">{product.rating}</span>
                </div>
                <span className="text-2xl font-semibold text-gray-900">
                  ${product.price}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 transition"
              >
                ← Previous
              </button>
              <button
                onClick={goToNext}
                className="px-4 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 transition"
              >
                Next →
              </button>
              <span className="ml-auto text-sm text-gray-600 self-center">
                {currentIndex + 1} / {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
