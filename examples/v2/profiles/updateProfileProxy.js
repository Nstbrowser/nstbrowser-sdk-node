/**
 * Example demonstrating how to update a proxy for a specific profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID for which you want to update the proxy
const profileId = 'your_profile_id';
const proxyConfig = {
  url: 'http://admin:654321@127.0.0.1:8000',
};

async function updateProfileProxy() {
  try {
    const response = await client.profiles().updateProfileProxy(profileId, proxyConfig);
    console.log(`Proxy updated successfully for profile ${profileId}`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to update profile proxy:', error);
  }
}

// Execute the example
updateProfileProxy(); 
