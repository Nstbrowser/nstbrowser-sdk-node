/**
 * Example demonstrating how to create a new browser profile.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the data for the new profile
const profileData = {
  name: 'testProfile',
  platform: 'Windows',
  kernelMilestone: '132',
  groupName: 'Default',
  note: 'test profile note',
  proxy: 'http://admin:123456@127.0.0.1:8000',
  fingerprint: {
    flags: {
      audio: 'Noise',
      battery: 'Masked',
      canvas: 'Noise',
      clientRect: 'Noise',
      fonts: 'Masked',
      geolocation: 'Custom',
      geolocationPopup: 'Prompt',
      gpu: 'Allow',
      localization: 'Custom',
      screen: 'Custom',
      speech: 'Masked',
      timezone: 'Custom',
      webgl: 'Noise',
      webrtc: 'Custom',
    },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.6834.83 Safari/537.36',
    deviceMemory: 8,
    hardwareConcurrency: 16,
    disableImageLoading: true,
    restoreLastSession: true,
    doNotTrack: true,
    localization: {
      language: 'zh-HK',
      languages: ['zh-HK', 'en-US', 'en'],
      timezone: 'Asia/Hong_Kong',
    },
    screen: { width: 1280, height: 1024 },
    geolocation: {
      latitude: '31.2333',
      longitude: '121.469',
      accuracy: '603',
    },
    webrtc: { publicIp: '111.111.111.111' },
  },
  startupUrls: ['https://www.nstbrowser.io'],
  args: {
    '--remote-debugging-port': 34543,
    '--disable-backgrounding-occluded-windows': true,
  },
};

async function createProfile() {
  try {
    const response = await client.profiles().createProfile(profileData);
    console.log('Profile created successfully');
    console.log('Response:', response);

    // Extract and print the new profile ID if available
    if (response?.data?.profileId) {
      const profileId = response.data.profileId;
      console.log(`\nNew profile ID: ${profileId}`);
    }
  } catch (error) {
    console.error('Failed to create profile:', error);
  }
}

// Execute the example
createProfile();
