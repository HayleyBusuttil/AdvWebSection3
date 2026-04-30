'use client';

import { Product } from '@/types';
import { ProductGallery } from './ProductGallery';

interface ProductModalProps {
  isOpen: boolean;
  product: Product | null;
  isFavorite: boolean;
  onClose: () => void;
  onToggleFavorite: (productId: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductModal({
  isOpen,
  product,
  isFavorite,
  onClose,
  onToggleFavorite,
  onAddToCart,
}: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto" data-testid="product-modal">
          {/* Close Button */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-end">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Close modal"
              data-testid="close-modal-button"
            >
              <img src="/icons/close.svg" alt="" aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          {/* Product Details */}
          <div className="p-6">
            <ProductGallery
              product={product}
              onAddToCart={onAddToCart}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        </div>
      </div>
    </>
  );
}
