// src/sanity/schemas/product.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name', // Automatically generates slug from 'name' field
          maxLength: 96,
        },
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'fuelCapacity',
        type: 'number',
        title: 'Fuel Capacity',
      },
      {
        name: 'transmission',
        type: 'string',
        title: 'Transmission',
      },
      {
        name: 'seatingCapacity',
        type: 'number',
        title: 'Seating Capacity',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
      },
      // Add other fields here if needed
    ],
  };
  