import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '7x4fbq8f', // Replace with your actual project ID
  dataset: 'production',
  useCdn: true, // faster response
  apiVersion: '2026-02-26', 
})