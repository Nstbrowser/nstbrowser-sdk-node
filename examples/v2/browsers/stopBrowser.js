/**
 * Example demonstrating how to stop a browser for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID for which you want to stop the browser
const profileId = 'your_profile_id';

async function stopBrowser() {
  try {
    const response = await client.browsers().stopBrowser(profileId);
    console.log(`Browser stopped successfully for profile ${profileId}`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to stop browser:', error);
  }
}

// Execute the example
stopBrowser(); 
