import { createClient } from 'next-sanity';

// Environment variables for Sanity configuration
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.SANITY_API_VERSION || '2024-02-04'; // Optional fallback for the API version

// Check if environment variables are properly set
if (!projectId || !dataset) {
  throw new Error('Sanity projectId or dataset are missing in environment variables.');
}

// Exported Sanity client
export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion,
});

// Fetch cars data
export async function getCars() {
  return sanityClient.fetch(`
    *[_type == "car"] {
      _id,
      name,
      brand,
      slug,
      seatingCapacity,
      fuelCapacity,
      pricePerDay,
      transmission,
      "imageUrl": image.asset->url
    }
  `);
}
