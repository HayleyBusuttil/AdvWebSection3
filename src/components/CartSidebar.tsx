'use client';

import { CartItem } from '@/types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  cartTotal: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onCheckout: () => void;
}

export function CartSidebar({
  isOpen,
  onClose,
  cart,
  cartTotal,
  onUpdateQuantity,
  onRemoveFromCart,
  onCheckout,
}: CartSidebarProps) {
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
        className={`fixed right-0 top-0 h-screen w-full md:w-96 bg-white border-l border-gray-200 shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-auto p-4">
            {cart.length === 0 ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <p className="text-2xl mb-2">🛒</p>
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="text-3xl flex-shrink-0">{item.image}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 transition text-sm"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100 transition text-sm"
                        >
                          +
                        </button>
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700 transition text-sm"
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

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">Total:</span>
                <span className="text-xl font-semibold text-gray-900">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
