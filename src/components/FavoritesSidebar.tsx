'use client';

import { Product } from '@/types';

interface FavoritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Set<string>;
  products: Product[];
  onRemoveFromFavorites: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export function FavoritesSidebar({
  isOpen,
  onClose,
  favorites,
  products,
  onRemoveFromFavorites,
  onAddToCart,
}: FavoritesSidebarProps) {
  const favoriteProducts = products.filter((p) => favorites.has(p.id));

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-full md:w-96 bg-white border-r border-gray-200 shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        data-testid="favorites-sidebar"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Favorites</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Close favorites"
              data-testid="close-favorites-button"
            >
              <img src="/icons/close.svg" alt="" aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          {/* Favorites Items */}
          <div className="flex-1 overflow-auto p-4">
            {favoriteProducts.length === 0 ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <img src="/icons/heart-outline.svg" alt="" aria-hidden="true" className="mx-auto mb-2 h-8 w-8" />
                  <p className="text-gray-600">No favorites yet</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {favoriteProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="text-3xl flex-shrink-0">{product.image}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600">${product.price}</p>
                      <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                      <div className="flex gap-2 mt-2">
                        {product.inStock ? (
                          <button
                            onClick={() => onAddToCart(product)}
                            className="text-xs py-1 px-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <span className="text-xs py-1 px-2 bg-gray-200 text-gray-700 rounded">
                            Out of Stock
                          </span>
                        )}
                        <button
                          onClick={() => onRemoveFromFavorites(product.id)}
                          className="text-xs py-1 px-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
