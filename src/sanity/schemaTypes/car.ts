export default {
    name: 'car',
    type: 'document',
    title: 'Car',
    fields: [
      {
        name: 'name', // Ensure this field exists
        type: 'string',
        title: 'Car Name',
      },
      {
        name: 'brand',
        type: 'string',
        title: 'Brand',
        description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
      },
      {
        name: 'type',
        type: 'string',
        title: 'Car Type',
        description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
      },
      {
        name: 'fuelCapacity',
        type: 'string',
        title: 'Fuel Capacity',
        description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Auto-generated slug from Car Name',
        options: {
          source: 'name', // Generates slug from the Car Name field
          maxLength: 96,  // Limits slug length
        },
      },
      {
        name: 'transmission',
        type: 'string',
        title: 'Transmission',
        description: 'Type of transmission (e.g., Manual, Automatic)',
      },
      {
        name: 'seatingCapacity',
        type: 'string',
        title: 'Seating Capacity',
        description: 'Number of seats (e.g., 2 People, 4 seats)',
      },
      {
        name: 'pricePerDay',
        type: 'string',
        title: 'Price Per Day',
        description: 'Rental price per day',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
        description: 'Specific information related to vehicle',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., popular, recommended)',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Car Image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
export interface CartItem {
  readonly id: string;
  name: string;
  price: number;
  quantity?: number; // Optional, defaults can be managed in logic
}

  