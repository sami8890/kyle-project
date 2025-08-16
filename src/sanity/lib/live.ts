// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { createClient } from 'next-sanity'
import { dataset, projectId } from '../env'

// Create a fresh client instance for live queries to avoid type conflicts
const liveClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01', // Use the experimental API for live content
  useCdn: false, // Disable CDN for live content
})

export const { sanityFetch, SanityLive } = defineLive({ 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client: liveClient as any
});
