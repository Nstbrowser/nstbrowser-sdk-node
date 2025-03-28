/**
 * Example demonstrating how to get pages information for a specific browser.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID for which you want to get browser pages
const profileId = 'your_profile_id';

async function getBrowserPages() {
  try {
    const response = await client.browsers().getBrowserPages(profileId);
    console.log(`Pages for browser with profile ${profileId}:`);
    console.log('Response:', response);

    // Print a list of page URLs if available
    if (response && response.data) {
      const pages = response.data;
      console.log('\nPage info:');
      pages.forEach((page, index) => {
        console.log(`${index + 1}. ${page}`);
      });
    }
  } catch (error) {
    console.error('Failed to get browser pages:', error);
  }
}

// Execute the example
getBrowserPages(); 
