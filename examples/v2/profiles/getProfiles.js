/**
 * Example demonstrating how to get a list of profiles with optional filtering.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

async function getProfiles() {
  try {
    // Get all profiles
    const response = await client.profiles().getProfiles();
    console.log('All profiles:');
    console.log('Response:', response);

    // Get profiles with filtering
    const filterData = {
      page: 1,
      pageSize: 10,
      s: 'test',
      tags: '',
      groupId: '',
    };
    const filteredResponse = await client.profiles().getProfiles(filterData);
    console.log('\nFiltered profiles:');
    console.log('Response:', filteredResponse);
  } catch (error) {
    console.error('Failed to get profiles:', error);
  }
}

// Execute the example
getProfiles(); 
