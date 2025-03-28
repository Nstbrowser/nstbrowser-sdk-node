/**
 * Example demonstrating how to update tags for multiple profiles in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the batch update tags data
const batchUpdateData = {
  profileIds: ['profile_id_1', 'profile_id_2', 'profile_id_3'],
  tags: [
    { name: 'social', color: '#646AEE' },
    { name: 'marketing', color: '#646AEE' },
    { name: 'testing', color: '#646AEE' },
  ],
};

async function batchUpdateProfileTags() {
  try {
    const response = await client.profiles().batchUpdateProfileTags(batchUpdateData);
    console.log(
      `Tags ${JSON.stringify(batchUpdateData.tags)} updated for ${batchUpdateData.profileIds.length} profiles`
    );
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to batch update profile tags:', error);
  }
}

// Execute the example
batchUpdateProfileTags(); 
