'use client';

import { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search products...',
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`relative border rounded-lg transition-all duration-200 ${
          isFocused ? 'border-gray-900 shadow-md' : 'border-gray-300'
        }`}
      >
        <img src="/icons/search.svg" alt="" aria-hidden="true" className="absolute left-3 top-3 h-4 w-4" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 bg-transparent focus:outline-none text-sm"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition"
            aria-label="Clear search"
            data-testid="clear-search-button"
          >
            <img src="/icons/close.svg" alt="" aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
