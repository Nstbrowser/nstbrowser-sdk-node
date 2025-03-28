/**
 * Example demonstrating how to get debugger information for a specific browser.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the profile ID for which you want to get browser debugger information
const profileId = 'your_profile_id';

async function getBrowserDebugger() {
  try {
    const response = await client.browsers().getBrowserDebugger(profileId);
    console.log(`Debugger information for browser with profile ${profileId}:`);
    console.log('Response:', response);

    // Extract and print the debugger URL if available
    if (response?.data?.webSocketDebuggerUrl) {
      const debuggerUrl = response.data.webSocketDebuggerUrl;
      console.log(`\nDebugger URL: ${debuggerUrl}`);
    }
  } catch (error) {
    console.error('Failed to get browser debugger information:', error);
  }
}

// Execute the example
getBrowserDebugger(); 
