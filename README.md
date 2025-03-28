# Nstbrowser SDK for Node.js

A Node.js SDK for interacting with [Nstbrowser API v2](https://apidocs.nstbrowser.io/)

> **Note**: This documentation is for API v2, which is the recommended version with complete functionality from v1 plus additional features. For v1 documentation, please refer to [README-v1.md](./README-v1.md). New users are encouraged to use v2 for a more stable and standardized experience.

## Overview

This SDK implements Nstbrowser API v2, providing a comprehensive set of tools for managing browser profiles, controlling browser instances, managing local browser data, and utilizing Chrome DevTools Protocol (CDP) for browser automation.

The SDK enables you to:
- Create and manage browser profiles with detailed fingerprint configurations
- Start and stop browser instances individually or in batch
- Configure and manage proxies for profiles
- Manage profile tags for better organization
- Clear browser cache and cookies
- Connect to browsers using Chrome DevTools Protocol (CDP)
- Automate browser actions through CDP integration with Puppeteer

## Installation

Using npm:

```bash
$ npm install nstbrowser-sdk-node
```

Using pnpm:

```bash
$ pnpm install nstbrowser-sdk-node
```

Using yarn:

```bash
$ yarn add nstbrowser-sdk-node
```

## Getting Started

To use the SDK, you need an API key from Nstbrowser:

```javascript
import { NstBrowserV2 } from 'nstbrowser-sdk-node';

// Initialize the client with your API key
const client = new NstBrowserV2('your_api_key', {
  timeout: 60000,
  apiAddress: 'http://localhost:8848/api/v2'
});

// Now you can use the various services
const profileId = 'your_profile_id';

// Start a browser instance
const startResponse = await client.browsers().startBrowser({ profileId });
console.log('Browser started:', startResponse);

// Stop the browser instance
const stopResponse = await client.browsers().stopBrowser({ profileId });
console.log('Browser stopped:', stopResponse);
```

## CDP Integration with Puppeteer

One of the most powerful features of the SDK is its seamless integration with Puppeteer for browser automation:

```javascript
import { NstBrowserV2 } from 'nstbrowser-sdk-node';
import puppeteer from 'puppeteer-core';

async function automateWithPuppeteer() {
  const client = new NstBrowserV2('your_api_key');
  
  // Connect to a browser using CDP
  const cdpResponse = await client.cdpEndpoints().connectBrowser({
    profileId: 'your_profile_id',
    config: {
      headless: false,
      autoClose: false
    }
  });

  // Connect Puppeteer to the browser instance
  const browser = await puppeteer.connect({
    browserWSEndpoint: cdpResponse.data.webSocketDebuggerUrl,
    defaultViewport: null
  });

  // Use Puppeteer for automation
  const page = await browser.newPage();
  await page.goto('https://example.com');
  
  // ... perform other actions
}
```

## Examples

The SDK comes with a comprehensive set of examples in the `/examples/v2` directory. To run the examples:

1. Navigate to the examples directory and install dependencies:
```bash
cd examples/v2
npm install
```

2. Create a `.env` file in the `examples/v2` directory and add your API key:
```bash
echo "nstbrowser_api_key=your-api-key" > .env
```

3. Run any example:
```bash
node browsers/startBrowser.js
```

Available examples are organized by service:

### Browser Examples
- `browsers/getBrowserDebugger.js`: Get browser debugger information for automation
- `browsers/getBrowserPages.js`: Get information about browser pages
- `browsers/getBrowsers.js`: Get list of active browsers with status information
- `browsers/startBrowser.js`: Start a browser for a specific profile
- `browsers/startBrowsers.js`: Start multiple browsers in batch
- `browsers/startOnceBrowser.js`: Start a once-off browser with custom configuration
- `browsers/stopBrowser.js`: Stop a specific browser instance
- `browsers/stopBrowsers.js`: Stop multiple browser instances in batch

### Profile Examples
- `profiles/batchClearProfileTags.js`: Clear tags for multiple profiles in batch
- `profiles/batchCreateProfileTags.js`: Create tags for multiple profiles in batch
- `profiles/batchResetProfileProxy.js`: Reset proxies for multiple profiles in batch
- `profiles/batchUpdateProfileTags.js`: Update tags for multiple profiles in batch
- `profiles/batchUpdateProxy.js`: Update proxies for multiple profiles in batch
- `profiles/clearProfileTags.js`: Clear all tags from a specific profile
- `profiles/createProfile.js`: Create a new profile with detailed configuration
- `profiles/createProfileTags.js`: Create new tags for a specific profile
- `profiles/deleteProfile.js`: Delete a specific profile
- `profiles/deleteProfiles.js`: Delete multiple profiles in batch
- `profiles/getProfileTags.js`: Get all tags associated with profiles
- `profiles/getProfiles.js`: Get profiles with filtering options
- `profiles/resetProfileProxy.js`: Reset proxy configuration for a specific profile
- `profiles/updateProfileProxy.js`: Update proxy configuration for a specific profile
- `profiles/updateProfileTags.js`: Update tags for a specific profile

### Local Data Examples
- `locals/clearProfileCache.js`: Clear browser cache for a specific profile
- `locals/clearProfileCookies.js`: Clear browser cookies for a specific profile

### CDP Endpoint Examples
- `cdpEndpoints/connectBrowser.js`: Connect to a browser using CDP and automate with Puppeteer
- `cdpEndpoints/connectOnceBrowser.js`: Connect to a once-off browser with CDP and automate with Puppeteer

## Support

For support, feel free to reach out to us via [Discord](https://api.nstbrowser.io/api/v1/links/discord). For more detailed documentation, visit the official Nstbrowser documentation: [Nstbrowser API Documentation](https://apidocs.nstbrowser.io).
