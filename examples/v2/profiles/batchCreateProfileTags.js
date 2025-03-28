/**
 * Example demonstrating how to create tags for multiple profiles in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the batch tags data
const batchTagsData = {
  profileIds: ['profile_id_1', 'profile_id_2', 'profile_id_3'],
  tags: [
    { name: 'social', color: '#646AEE' },
    { name: 'marketing', color: '#646AEE' },
    { name: 'testing', color: '#646AEE' },
  ],
};

async function batchCreateProfileTags() {
  try {
    const response = await client.profiles().batchCreateProfileTags(batchTagsData);
    console.log(
      `Tags ${JSON.stringify(batchTagsData.tags)} created for ${batchTagsData.profileIds.length} profiles`
    );
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to batch create profile tags:', error);
  }
}

// Execute the example
batchCreateProfileTags(); 
