'use client';

import { Product } from '@/types';

interface RecentlyViewedSectionProps {
  recentlyViewed: string[];
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function RecentlyViewedSection({
  recentlyViewed,
  products,
  onProductClick,
}: RecentlyViewedSectionProps) {
  if (recentlyViewed.length === 0) return null;

  const recentProducts = recentlyViewed
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);

  if (recentProducts.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6 my-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recently Viewed</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {recentProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => onProductClick(product)}
            className="flex-shrink-0 w-24 h-24 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:shadow-md transition cursor-pointer text-4xl"
          >
            {product.image}
          </button>
        ))}
      </div>
    </div>
  );
}
