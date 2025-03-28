/**
 * Example demonstrating how to connect to a browser using Chrome DevTools Protocol
 * and control it using puppeteer-core.
 */

import { NstBrowserV2 } from 'nstbrowser-sdk-node';

import puppeteer from 'puppeteer-core'

async function getCdpWebsocketUrl() {
  const apiKey = process.env.NSTBROWSER_API_KEY || 'your_api_key';
  const profileId = 'your_profile_id';
  const config = {
    headless: false, // False to see the browser UI
    autoClose: false, // False to keep the browser open after the script ends
  };

  try {
    // Initialize the client
    const client = new NstBrowserV2(apiKey);
    console.log(`Initialized NstBrowserV2, connecting to profile: ${profileId}`);

    // Connect to the browser
    const response = await client.cdpEndpoints().connectBrowser(profileId, config);
    console.log(`Successfully connected to browser for profile ${profileId}`);

    // Extract WebSocket endpoint if available
    if (response?.data?.webSocketDebuggerUrl) {
      const wsEndpoint = response.data.webSocketDebuggerUrl;
      console.log(`WebSocket endpoint: ${wsEndpoint}`);
      return wsEndpoint;
    } else {
      console.log('WebSocket endpoint not found in response');
      return null;
    }
  } catch (error) {
    console.error('Failed to connect to browser:', error);
    return null;
  }
}

async function controlBrowserWithPuppeteer(websocketUrl) {
  try {
    console.log('\nConnecting to browser with puppeteer-core...');
    const browser = await puppeteer.connect({
      browserWSEndpoint: websocketUrl,
      defaultViewport: null,
    });

    // Get the default page or create a new one
    const pages = await browser.pages();
    const page = pages[0] || await browser.newPage();

    console.log('Navigating to example.com...');
    await page.goto('https://example.com');

    const title = await page.title();
    console.log(`Page title: ${title}`);

    console.log('Taking screenshot...');
    await page.screenshot({ path: 'example_screenshot.png' });
    console.log('Screenshot saved to example_screenshot.png');

    const content = await page.$eval('h1', (el) => el.textContent);
    console.log(`H1 content: ${content}`);

    console.log('Waiting for 3 seconds...');
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Close the connection
    await page.close();
    await browser.disconnect();
    console.log('Puppeteer connection closed');
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('puppeteer-core is not installed. Please install it with: npm install puppeteer-core');
    } else {
      console.error('Error during Puppeteer automation:', error);
    }
  }
}

async function main() {
  // Step 1: Get the CDP WebSocket URL
  const websocketUrl = await getCdpWebsocketUrl();

  // Step 2: Use the WebSocket URL with Puppeteer if available
  if (websocketUrl) {
    console.log('\nStarting Puppeteer automation...');
    await controlBrowserWithPuppeteer(websocketUrl);
  } else {
    console.log('Cannot proceed with Puppeteer automation: WebSocket URL not available');
  }
}

// Execute the example
main(); 
