/**
 * Example demonstrating how to clear the cache for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID for which you want to clear cache
const profileId = 'your_profile_id';

async function clearProfileCache() {
  try {
    const response = await client.locals().clearProfileCache(profileId);
    console.log(`Cache cleared successfully for profile ${profileId}`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to clear profile cache:', error);
  }
}

// Execute the example
clearProfileCache(); 
