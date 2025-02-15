// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.

import { defineLive, createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from './client';

// Recreate the client to use .withConfig()
const client = createClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion,
});

// Define live content configuration
export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX'  // Replace 'vX' with your preferred version or leave it as is for the latest
  }) 
});
