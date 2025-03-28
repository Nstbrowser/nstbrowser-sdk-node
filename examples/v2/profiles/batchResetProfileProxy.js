/**
 * Example demonstrating how to reset proxies for multiple profiles in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define a list of profile IDs for which you want to reset proxies
const profileIds = ['profile_id_1', 'profile_id_2', 'profile_id_3'];

async function batchResetProfileProxy() {
  try {
    const response = await client.profiles().batchResetProfileProxy(profileIds);
    console.log(`Proxies reset successfully for ${profileIds.length} profiles`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to batch reset profile proxies:', error);
  }
}

// Execute the example
batchResetProfileProxy(); 
