'use client';

import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  favoriteCount: number;
  onCartClick: () => void;
  onFavoritesClick: () => void;
}

export function Header({
  cartCount,
  favoriteCount,
  onCartClick,
  onFavoritesClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-wider text-gray-900">
            LUXE
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 transition">
              Shop
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            {/* Favorites Button */}
            <button
              onClick={onFavoritesClick}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Favorites"
            >
              <span className="text-xl">♡</span>
              {favoriteCount > 0 && (
                <span className="absolute top-0 right-0 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Shopping Cart"
            >
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="text-xl">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
            <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 transition">
              Shop
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
