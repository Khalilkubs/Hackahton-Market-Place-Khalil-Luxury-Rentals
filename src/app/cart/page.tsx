"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Rental Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-4">
          {cart.map((car, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-lg flex items-center gap-4 mb-4">
              <Image src={car.image.asset.url} alt={car.name} width={100} height={75} className="rounded-lg" />
              <div>
                <h2 className="text-lg font-bold">{car.name}</h2>
                <p className="text-gray-600">Price: ${car.pricePerDay}/day</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
