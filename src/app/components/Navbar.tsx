"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../lib/sanity";
import Search from "./search";
import Link from "next/link";

interface SimplifiedCar {
  _id: string;
  name: string;
  type: string;
  slug: { current: string };
  image: string; // 
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
}

async function getData() {
  const query = `*[_type == "car"]{
    _id,
    name,
    type,
    slug,
    image{ asset->{url} },
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay
  }`;
  return await client.fetch(query);
}

export default function Navbar() {
  const [data, setData] = useState<SimplifiedCar[]>([]);
  const [cart, setCart] = useState<SimplifiedCar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      const simplifiedData = fetchedData.map((car: any) => ({
        ...car,
        image: car.image.asset.url, // image کو string URL 
      }));
      setData(simplifiedData);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-green-200 h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <h1 className="text-[#3563e9] text-4xl font-bold">KHALIL LUXURY RENTALS</h1>
        <div className="input relative w-full md:w-auto">
          <Search data={data} />
        </div>
      </div>

      {/* Icons Section */}
      <div className="icons flex items-center gap-6 mt-4 md:mt-0">
        {/* Add to Cart Button */}
        <Link href={"/cart"} className="relative flex items-center gap-2 bg-blue-300 text-gray-800 px-4 py-2 rounded-lg font-semibold">
          <Image src="/icons8-car-.png" alt="Cart" width={30} height={30} />
          <span className="text-gray-800">Rental Cart</span>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Admin Button */}
        <Link href={"/user"}>
          <Image src={"/admin.png"} alt="Admin" width={48} height={44} />
        </Link>
      </div>
    </div>
  );
}
