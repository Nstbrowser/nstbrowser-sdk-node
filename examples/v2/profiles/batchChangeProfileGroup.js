/**
 * Example demonstrating how to move multiple profiles to a different group in batch.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profiles and target group for batch update
const batchGroupData = {
  profileIds: ['profile_id_1', 'profile_id_2', 'profile_id_3'],
  groupId: 'target_group_id'
};

async function batchChangeProfileGroup() {
  try {
    const response = await client.profiles().batchChangeProfileGroup(batchGroupData);
    console.log(`${batchGroupData.profileIds.length} profiles moved to group ${batchGroupData.groupId} successfully`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to batch change profile groups:', error);
  }
}

// Execute the example
batchChangeProfileGroup();
