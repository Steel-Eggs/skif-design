import { useState, useEffect, useCallback } from "react";

const FAVORITES_KEY = "skif_favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error loading favorites:", e);
    }
  }, []);

  // Save to localStorage whenever favorites change
  const saveFavorites = useCallback((newFavorites: number[]) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (e) {
      console.error("Error saving favorites:", e);
    }
  }, []);

  const addToFavorites = useCallback((productId: number) => {
    setFavorites(prev => {
      if (prev.includes(productId)) return prev;
      const newFavorites = [...prev, productId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const removeFromFavorites = useCallback((productId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(id => id !== productId);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const toggleFavorite = useCallback((productId: number) => {
    setFavorites(prev => {
      const isFavorite = prev.includes(productId);
      const newFavorites = isFavorite 
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((productId: number) => {
    return favorites.includes(productId);
  }, [favorites]);

  const clearFavorites = useCallback(() => {
    localStorage.removeItem(FAVORITES_KEY);
    setFavorites([]);
  }, []);

  return {
    favorites,
    favoritesCount: favorites.length,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  };
};

// Global event for syncing favorites across components
export const FAVORITES_UPDATED_EVENT = "favorites_updated";

export const dispatchFavoritesUpdate = () => {
  window.dispatchEvent(new CustomEvent(FAVORITES_UPDATED_EVENT));
};
