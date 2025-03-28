/**
 * Example demonstrating how to get all profile tags.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

async function getProfileTags() {
  try {
    const response = await client.profiles().getProfileTags();
    console.log('Profile tags retrieved successfully');
    console.log('Response:', response);

    // Print a list of all unique tags if available
    if (response?.data) {
      const tags = response.data;
      console.log('\nAvailable tags:');
      tags.forEach((tag, index) => {
        console.log(`${index + 1}. ${tag}`);
      });
    }
  } catch (error) {
    console.error('Failed to get profile tags:', error);
  }
}

// Execute the example
getProfileTags(); 
