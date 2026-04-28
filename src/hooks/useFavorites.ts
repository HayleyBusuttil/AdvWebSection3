'use client';

import { useCallback, useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const addToFavorites = useCallback((productId: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.add(productId);
      return newSet;
    });
  }, []);

  const removeFromFavorites = useCallback((productId: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.delete(productId);
      return newSet;
    });
  }, []);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  }, []);

  const isFavorite = useCallback(
    (productId: string) => favorites.has(productId),
    [favorites]
  );

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    favoriteCount: favorites.size,
  };
};
