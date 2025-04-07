/**
 * Example demonstrating how to get all profile groups with optional filtering.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Optional group name for filtering
const groupName = 'work';

async function getAllProfileGroups() {
  try {
    // Get all groups or filter by name if provided
    const response = await client.profiles().getAllProfileGroups(groupName);
    console.log('Profile groups retrieved successfully');
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to get profile groups:', error);
  }
}

// Execute the example
getAllProfileGroups();
