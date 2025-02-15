import Image from "next/image";

interface Car {
  name: string;
  pricePerDay: string;
  image: {
    asset: {
      url: string;
    };
  };
}

type CarItemProps = {
  car: Car;
  addToCart: (car: Car) => void;
};

export default function CarItem({ car, addToCart }: CarItemProps) {
  return (
    <div className="car-item p-4 border rounded-lg shadow-lg">
      <Image 
        src={car.image.asset.url} 
        alt={car.name} 
        width={200} 
        height={150} 
        className="rounded-lg" 
      />
      <h2 className="text-lg font-bold">{car.name}</h2>
      <p className="text-gray-600">Price: ${car.pricePerDay} per day</p>
      
      <button 
        onClick={() => addToCart(car)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Rent Now
      </button>
    </div>
  );
}
