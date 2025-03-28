/**
 * Example demonstrating how to start a once-off browser with custom configuration.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
const client = new NstBrowserV2(apiKey);

// Define the configuration for the once-off browser
const config = {
  name: 'testProfile',
  platform: 'Windows',
  kernelMilestone: '132',
  autoClose: true,
  timedCloseSec: 30,
  headless: false,
  incognito: false,
  proxy: 'http://admin:123456@127.0.0.1:8000',
  skipProxyChecking: true,
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
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.45 Safari/537.36',
    deviceMemory: 8,
    hardwareConcurrency: 16,
    disableImageLoading: true,
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
    'disable-backgrounding-occluded-windows': true,
  },
};

async function startOnceBrowser() {
  try {
    const response = await client.browsers().startOnceBrowser(config);
    console.log('Once-off browser started successfully');
    console.log('Response:', response);
  } catch (error) {
    console.error('Failed to start once-off browser:', error);
  }
}

// Execute the example
startOnceBrowser(); 
