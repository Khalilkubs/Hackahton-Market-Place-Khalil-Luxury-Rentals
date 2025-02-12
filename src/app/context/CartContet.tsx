"use client";
import { createContext, useContext, useState } from "react";

interface Car {
  _id: string;
  name: string;
  pricePerDay: number;
  image: { asset: { url: string } };
}

interface CartContextType {
  cart: Car[];
  addToCart: (car: Car) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Car[]>([]);

  const addToCart = (car: Car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
