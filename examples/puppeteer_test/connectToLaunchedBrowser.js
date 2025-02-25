import puppeteer from 'puppeteer-core';

const agentHost = '127.0.0.1';
const agentPort = 8848;
const agentBaseURL = `ws://${agentHost}:${agentPort}`;

// connectToLaunchedBrowser: connect to a launched browser
// you need to launch a browser first
async function connectToLaunchedBrowser({ apiKey, profileId }) {
  const query = new URLSearchParams({
    'x-api-key': apiKey, // required
  });
  const browserWSEndpoint = `${agentBaseURL}/devtool/browser/${profileId}?${query.toString()}`;

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

connectToLaunchedBrowser({ apiKey, profileId }).then();
