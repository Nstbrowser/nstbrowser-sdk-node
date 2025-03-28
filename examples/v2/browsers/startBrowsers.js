/**
 * Example demonstrating how to start multiple browsers in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define a list of profile IDs to start browsers for
const profileIds = ['profile_id_1', 'profile_id_2', 'profile_id_3'];

async function startBrowsers() {
  try {
    const response = await client.browsers().startBrowsers(profileIds);
    console.log(`Browsers started successfully for ${profileIds.length} profiles`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to start browsers:', error);
  }
}

// Execute the example
startBrowsers(); 
