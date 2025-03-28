/**
 * Example demonstrating how to get a list of browsers with optional status filtering.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

async function getBrowsers() {
  try {
    // Get all browsers
    const response = await client.browsers().getBrowsers();
    console.log('All browsers:');
    console.log('Response:', response);

    // Get browsers with a specific status (e.g., starting, running, stopping)
    const statusResponse = await client.browsers().getBrowsers('running');
    console.log('\nRunning browsers:');
    console.log('Response:', statusResponse);
  } catch (error) {
    console.error('Failed to get browsers:', error);
  }
}

// Execute the example
getBrowsers(); 
