/**
 * Example demonstrating how to delete multiple profiles in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define a list of profile IDs to delete
const profileIds = ['profile_id_1', 'profile_id_2', 'profile_id_3'];

async function deleteProfiles() {
  try {
    const response = await client.profiles().deleteProfiles(profileIds);
    console.log(`Successfully deleted ${profileIds.length} profiles`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to delete profiles:', error);
  }
}

// Execute the example
deleteProfiles(); 
