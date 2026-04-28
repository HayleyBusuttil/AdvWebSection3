'use client';

import { useCallback, useState } from 'react';
import { Product, FilterState } from '@/types';

const DEFAULT_FILTERS: FilterState = {
  category: [],
  priceRange: [0, 500],
  searchQuery: '',
  inStockOnly: false,
  sortBy: 'newest',
};

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const updateFilters = useCallback((newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category],
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const filteredProducts = products.filter((product) => {
    // Category filter
    if (filters.category.length > 0 && !filters.category.includes(product.category)) {
      return false;
    }

    // Price filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Stock filter
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }

    // Search filter
    if (filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return 0;
    }
  });

  return {
    filters,
    filteredProducts: sortedProducts,
    updateFilters,
    toggleCategory,
    resetFilters,
  };
};
