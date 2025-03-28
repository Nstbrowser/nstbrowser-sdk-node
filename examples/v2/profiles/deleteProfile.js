/**
 * Example demonstrating how to delete a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID to delete
const profileId = '461d0bf2-9de8-4e24-8bd9-c7cbf045e4aa';

async function deleteProfile() {
  try {
    const response = await client.profiles().deleteProfile(profileId);
    console.log(`Profile ${profileId} deleted successfully`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to delete profile:', error);
  }
}

// Execute the example
deleteProfile(); 
