import puppeteer from 'puppeteer-core';

const agentHost = '127.0.0.1';
const agentPort = 8848;
const agentBaseURL = `ws://${agentHost}:${agentPort}`;


// TODO coming soon
// createAndConnectToBrowser: create a browser and connect to it
// create a browser with custom config and connect to it
// support custom config
async function createAndConnectToBrowser({ apiKey, config }) {
  const query = new URLSearchParams({
    'x-api-key': apiKey, // required
    config: encodeURIComponent(JSON.stringify((config))),
  });
  const browserWSEndpoint = `${agentBaseURL}/devtool/launch?${query.toString()}`;
  console.log('browserWSEndpoint: ', browserWSEndpoint);
  await execPuppeteer(browserWSEndpoint);
}

const apiKey = 'your apiKey';
const config = {
  headless: false,
  autoClose: true,
  remoteDebuggingPort: 9222,
  fingerprint: {
    name: 'custom browser',
    platform: 'windows', // support: windows, mac, linux
    kernel: 'chromium', // only support: chromium
    kernelMilestone: '113', // only support: 113
    hardwareConcurrency: 4, // support: 2, 4, 8, 10, 12, 14, 16
    deviceMemory: 4, // support: 2, 4, 8
    proxy: '', // input format: schema://user:password@host:port eg: http://user:password@localhost:8080
  },
};
createAndConnectToBrowser({ apiKey, config }).then();
