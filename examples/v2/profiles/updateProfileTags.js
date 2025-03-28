/**
 * Example demonstrating how to update tags for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID and updated tags data
const profileId = 'your_profile_id';

const updateTagsData = [
  { name: 'social', color: '#646AEE' },
  { name: 'marketing', color: '#646AEE' },
  { name: 'testing', color: '#646AEE' },
];

async function updateProfileTags() {
  try {
    const response = await client.profiles().updateProfileTags(profileId, updateTagsData);
    console.log(`Tags updated successfully for profile ${profileId}:`, updateTagsData);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to update profile tags:', error);
  }
}

// Execute the example
updateProfileTags(); 
