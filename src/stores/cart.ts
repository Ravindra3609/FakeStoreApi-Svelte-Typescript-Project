import { writable } from 'svelte/store';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// Utility function to check if localStorage is available
function isLocalStorageAvailable() {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

const storedCart = isLocalStorageAvailable() ? localStorage.getItem('cart') : null;
const initialCart = storedCart ? JSON.parse(storedCart) : [];
const cart = writable<CartItem[]>(initialCart);

if (isLocalStorageAvailable()) {
  cart.subscribe((value) => {
    localStorage.setItem('cart', JSON.stringify(value));
  });
}

export const addToCart = (product: CartItem, quantity: number = 1) => {
  cart.update((items) => {
    const existing = items.find(item => item.id === product.id);
    if (existing) {
      return items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
    }
    return [...items, { ...product, quantity }];
  });
};

export const removeFromCart = (id: number) => {
  cart.update((items) => items.filter(item => item.id !== id));
};

export const updateQuantity = (id: number, quantity: number) => {
  cart.update((items) => {
    const existing = items.find(item => item.id === id);
    if (existing) {
      return items.map(item => item.id === id ? { ...item, quantity: quantity } : item);
    }
    return items;
  });
};

export const clearCart = () => {
  cart.set([]);
};

export default cart;
