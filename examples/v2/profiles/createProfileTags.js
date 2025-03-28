/**
 * Example demonstrating how to create tags for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID and tags data
const profileId = 'your_profile_id';
const data = [
  { name: 'social', color: '#646AEE' },
  { name: 'marketing', color: '#646AEE' },
  { name: 'testing', color: '#646AEE' },
];

async function createProfileTags() {
  try {
    const response = await client.profiles().createProfileTags(profileId, data);
    console.log(`Tags created successfully for profile ${profileId}:`, data);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to create profile tags:', error);
  }
}

// Execute the example
createProfileTags(); 
