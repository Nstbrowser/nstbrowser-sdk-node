/**
 * Example demonstrating how to move a profile to a different group.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile and target group
const profileId = 'your_profile_id';
const groupId = 'target_group_id';

async function changeProfileGroup() {
  try {
    const response = await client.profiles().changeProfileGroup(profileId, groupId);
    console.log(`Profile ${profileId} moved to group ${groupId} successfully`);
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to change profile group:', error);
  }
}

// Execute the example
changeProfileGroup();
