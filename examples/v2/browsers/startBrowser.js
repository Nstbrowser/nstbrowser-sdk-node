/**
 * Example demonstrating how to start a browser for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID you want to start a browser for
const profileId = 'your_profile_id';

async function startBrowser() {
  try {
    const response = await client.browsers().startBrowser(profileId);
    console.log(`Browser started successfully for profile ${profileId}`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to start browser:', error);
  }
}

// Execute the example
startBrowser(); 
