"use client";  // ✅ Needed for client-side state

import { useCart } from "@/context/CartContext";  // ✅ Correct import

export default function Cart() {
  const { cart } = useCart();  

  return (
    <div className="p-8">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
