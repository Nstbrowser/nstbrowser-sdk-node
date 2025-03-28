/**
 * Example demonstrating how to update proxies for multiple profiles in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the proxy data for batch update
const proxyData = {
  profileIds: ['profile_id_1', 'profile_id_2', 'profile_id_3'],
  proxyConfig: {
    url: 'http://admin:654321@127.0.0.1:8000',
  },
};

async function batchUpdateProxy() {
  try {
    const response = await client.profiles().batchUpdateProxy(proxyData);
    console.log(`Proxies updated successfully for ${proxyData.profileIds.length} profiles`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to batch update proxies:', error);
  }
}

// Execute the example
batchUpdateProxy(); 
