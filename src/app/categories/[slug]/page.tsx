'use client';
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Car {
  _id: string;
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  brand?: string;
  originalPrice?: string;
  tags?: string[];
  slug: {
    current: string;
  };
}

// Fetch all cars
async function getData() {
  const query = `*[_type == "car"]{
    _id,
    name,
    type,
    slug,
    image{
      asset->{url}
    },
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
  }`;
  const data = await client.fetch(query);
  return data;
}

// Fetch car by slug
async function getCarBySlug(slug: string) {
  const cleanSlug = slug.replace(/['"]+/g, ""); // Sanitize slug
  const query = `*[_type == "car" && slug.current == "${cleanSlug}"][0]{
    _id,
    name,
    type,
    image,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    brand,
    originalPrice,
    tags,
    slug
  }`;
  const car = await client.fetch(query);
  return car;
}

export default async function CarDetails({
  params,
}: {
  params: { slug: string };
}) {
  const car: Car = await getCarBySlug(params.slug);
  const data: Car[] = await getData();

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="w-full flex flex-col gap-10 bg-[#f6f7f9] p-4 sm:p-6">
      <section className="flex flex-col md:flex-row gap-5 items-center justify-around">
        <div className="w-full lg:max-w-[470px] flex flex-col gap-4">
          <Image
            src={urlFor(car.image).url()}
            alt={`${car.name} Image`}
            width={400}
            height={360}
            className="w-full h-[210px] rounded-lg"
          />
          <div className="flex items-center justify-between gap-2 xl:gap-0">
            <Image
              src={urlFor(car.image).url()}
              alt={`${car.name} Thumbnail`}
              width={188}
              height={144}
              className="xl:w-[168px] w-[80px] md:w-[80px] h-[110px] xl:h-[144px] rounded-lg"
            />
            <Image src={"/View 2.png"} alt="Car View 2" width={148} height={124} />
            <Image src={"/View 3.png"} alt="Car View 3" width={148} height={124} />
          </div>
        </div>

        <Card className="w-full lg:max-w-[492px] bg-white rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {car.name}
              <Image src={"/heart.png"} alt="Favorite" width={20} height={20} />
            </CardTitle>
            <CardDescription>{car.type}</CardDescription>
            <Image src={"/Reviewsstar.png"} alt="Reviews" width={220} height={24} />
          </CardHeader>

          <CardContent className="flex flex-col gap-6 mt-8">
            <div className="car-details flex flex-col gap-6">
              <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Image src={"/gas-station.png"} alt="Fuel Capacity" width={32} height={32} />
                  <h1 className="text-lg font-medium text-gray-700">{car.fuelCapacity}</h1>
                  <p className="text-sm text-gray-500">Fuel Capacity</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image src={"/Caricon.png"} alt="Transmission" width={32} height={32} />
                  <h1 className="text-lg font-medium text-gray-700">{car.transmission}</h1>
                  <p className="text-sm text-gray-500">Transmission</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image src={"/profile-2user.png"} alt="Seating Capacity" width={32} height={32} />
                  <h1 className="text-lg font-medium text-gray-700">{car.seatingCapacity}</h1>
                  <p className="text-sm text-gray-500">Seating Capacity</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-gray-600 mt-4">
                <p className="text-lg font-medium">
                  Brand: <span className="text-gray-800">{car.brand || "N/A"}</span>
                </p>
                {car.tags && (
                  <p className="text-lg font-medium">
                    Tags: <span className="text-gray-800">{car.tags.join(", ")}</span>
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="popular flex flex-col gap-5">
        <div className="first flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Cars</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>

        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5">
          {data.slice(0, 3).map((product) => (
            <Card key={product._id} className="w-full max-w-[304px] h-[388px]">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <Image
                  src={urlFor(product.image).url()}
                  alt={`${product.name} Image`}
                  width={220}
                  height={68}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <p>{product.pricePerDay}/<span className="text-gray-500">day</span></p>
                <Link href={`/categories/${product.slug.current}`}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
