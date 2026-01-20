import { useState, useEffect, useCallback } from "react";

const CART_KEY = "skif_cart";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  sku?: string;
}

export const CART_UPDATED_EVENT = "cart_updated";

export const dispatchCartUpdate = () => {
  window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT));
};

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error loading cart:", e);
    }
  }, []);

  // Save to localStorage and dispatch event
  const saveCart = useCallback((newItems: CartItem[]) => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(newItems));
      setCartItems(newItems);
      dispatchCartUpdate();
    } catch (e) {
      console.error("Error saving cart:", e);
    }
  }, []);

  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(i => i.id === item.id);
      let newItems: CartItem[];
      
      if (existingIndex >= 0) {
        newItems = prev.map((i, idx) => 
          idx === existingIndex 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        newItems = [...prev, { ...item, quantity }];
      }
      
      localStorage.setItem(CART_KEY, JSON.stringify(newItems));
      dispatchCartUpdate();
      return newItems;
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prev => {
      const newItems = prev.filter(item => item.id !== productId);
      localStorage.setItem(CART_KEY, JSON.stringify(newItems));
      dispatchCartUpdate();
      return newItems;
    });
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCartItems(prev => {
      const newItems = prev.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      );
      localStorage.setItem(CART_KEY, JSON.stringify(newItems));
      dispatchCartUpdate();
      return newItems;
    });
  }, []);

  const clearCart = useCallback(() => {
    localStorage.removeItem(CART_KEY);
    setCartItems([]);
    dispatchCartUpdate();
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    cartCount: getCartCount(),
    cartTotal: getCartTotal(),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setCartItems: saveCart,
  };
};
