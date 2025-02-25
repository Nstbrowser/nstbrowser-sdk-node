import puppeteer from 'puppeteer-core';

const agentHost = '127.0.0.1';
const agentPort = 8848;
const agentBaseURL = `ws://${agentHost}:${agentPort}`;

// launchAndConnectToBrowser: launch a browser and connect to it
// you need to create a profile first
// support custom config
async function launchAndConnectToBrowser({ apiKey, profileId, config }) {
  const query = new URLSearchParams({
    'x-api-key': apiKey, // required
    config: encodeURIComponent(JSON.stringify((config))),
  });
  const browserWSEndpoint = `${agentBaseURL}/devtool/launch/${profileId}?${query.toString()}`;

  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: browserWSEndpoint,
      defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.goto('https://nstbrowser.io/');
    await page.screenshot({ path: 'screenshot.png' });
    await page.close();
    await browser.disconnect();
  } catch (err) {
    console.error(err);
  }
}

const apiKey = 'your apiKey';
const profileId = 'your profileId';

let config = {
  headless: false,
  autoClose: true,
  remoteDebuggingPort: 9222,
};

launchAndConnectToBrowser({ apiKey, profileId, config }).then();
