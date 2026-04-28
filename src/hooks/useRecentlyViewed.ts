'use client';

import { useCallback, useState } from 'react';

export const useRecentlyViewed = (maxItems: number = 5) => {
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  const addToRecentlyViewed = useCallback((productId: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, maxItems);
    });
  }, [maxItems]);

  const clearRecentlyViewed = useCallback(() => {
    setRecentlyViewed([]);
  }, []);

  return {
    recentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed,
  };
};
