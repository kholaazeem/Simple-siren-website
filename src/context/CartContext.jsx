import React, { createContext, useState } from 'react';

// Context create kar rahe hain
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Add to Cart Logic
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check karein agar product pehle se cart mein hai
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Agar hai, toh sirf quantity badha dein
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Agar naya hai, toh array mein add kar dein
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Product add hoty hi sidebar open kar dein
    setIsSidebarOpen(true);
  };

  // Remove from Cart Logic
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </CartContext.Provider>
  );
};