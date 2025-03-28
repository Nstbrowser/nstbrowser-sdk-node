/**
 * Example demonstrating how to clear all tags for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID for which you want to clear tags
const profileId = 'your_profile_id';

async function clearProfileTags() {
  try {
    const response = await client.profiles().clearProfileTags(profileId);
    console.log(`Tags cleared successfully for profile ${profileId}`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to clear profile tags:', error);
  }
}

// Execute the example
clearProfileTags(); 
