/**
 * Example demonstrating how to reset a proxy for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID for which you want to reset the proxy
const profileId = 'your_profile_id';

async function resetProfileProxy() {
  try {
    const response = await client.profiles().resetProfileProxy(profileId);
    console.log(`Proxy reset successfully for profile ${profileId}`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to reset profile proxy:', error);
  }
}

// Execute the example
resetProfileProxy(); 
