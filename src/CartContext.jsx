import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('marentree-cart')) ?? []; } catch { return []; }
  });

  useEffect(() => localStorage.setItem('marentree-cart', JSON.stringify(items)), [items]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    addItem(product, quantity = 1) {
      setItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        return existing
          ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
          : [...current, { ...product, quantity }];
      });
    },
    updateQuantity(id, quantity) { setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item)); },
    removeItem(id) { setItems((current) => current.filter((item) => item.id !== id)); },
    clearCart() { setItems([]); },
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Le hook est exporté avec le provider pour garder une API de panier cohérente.
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart doit être utilisé dans CartProvider');
  return context;
}
