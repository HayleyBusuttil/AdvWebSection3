'use client';

import { FilterState } from '@/types';
import { CATEGORIES, MIN_PRICE, MAX_PRICE } from '@/data/products';

interface FilterSidebarProps {
  filters: FilterState;
  onUpdateFilters: (filters: Partial<FilterState>) => void;
  onToggleCategory: (category: string) => void;
  onResetFilters: () => void;
}

export function FilterSidebar({
  filters,
  onUpdateFilters,
  onToggleCategory,
  onResetFilters,
}: FilterSidebarProps) {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-20 space-y-6 p-4 md:p-0">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Filters</h3>
          <button
            onClick={onResetFilters}
            className="text-xs text-gray-600 hover:text-gray-900 transition underline"
          >
            Reset
          </button>
        </div>

        {/* Search Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Search</label>
          <input
            type="text"
            placeholder="Search products..."
            value={filters.searchQuery}
            onChange={(e) => onUpdateFilters({ searchQuery: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">Category</label>
          <div className="space-y-2">
            {CATEGORIES.map((category) => (
              <label key={category} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => onToggleCategory(category)}
                  className="w-4 h-4 rounded border-gray-300 accent-gray-900"
                />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">Price Range</label>
          <div className="space-y-3">
            <div>
              <input
                type="range"
                min={MIN_PRICE}
                max={MAX_PRICE}
                value={filters.priceRange[0]}
                onChange={(e) =>
                  onUpdateFilters({
                    priceRange: [parseInt(e.target.value), filters.priceRange[1]],
                  })
                }
                className="w-full"
              />
              <span className="text-xs text-gray-600">${filters.priceRange[0]}</span>
            </div>
            <div>
              <input
                type="range"
                min={MIN_PRICE}
                max={MAX_PRICE}
                value={filters.priceRange[1]}
                onChange={(e) =>
                  onUpdateFilters({
                    priceRange: [filters.priceRange[0], parseInt(e.target.value)],
                  })
                }
                className="w-full"
              />
              <span className="text-xs text-gray-600">${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onUpdateFilters({
                sortBy: e.target.value as FilterState['sortBy'],
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Stock Filter */}
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onUpdateFilters({ inStockOnly: e.target.checked })}
            className="w-4 h-4 rounded border-gray-300 accent-gray-900"
          />
          <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
        </label>
      </div>
    </aside>
  );
}
