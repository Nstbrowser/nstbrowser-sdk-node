/**
 * Example demonstrating how to stop multiple browsers in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define a list of profile IDs for which you want to stop browsers
const profileIds = ['profile_id_1', 'profile_id_2', 'profile_id_3'];

async function stopBrowsers() {
  try {
    const response = await client.browsers().stopBrowsers(profileIds);
    console.log(`Browsers stopped successfully for ${profileIds.length} profiles`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to stop browsers:', error);
  }
}

// Execute the example
stopBrowsers(); 
