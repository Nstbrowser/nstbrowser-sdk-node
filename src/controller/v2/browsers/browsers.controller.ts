import {
  startBrowserService,
  startBrowsersService,
  startOnceBrowserService,
  stopBrowserService,
  stopBrowsersService,
  getBrowsersService,
  getBrowserPagesService,
  getBrowserDebuggerService,
} from '@/service/v2/browsers/browsers.service';

import type {
  SubClassConfig,
  BrowserStatus,
  StartOnceBrowserParam,
} from '@/types';

function browsersController(config: SubClassConfig) {
  async function startBrowser(profileId: string) {
    const data = await startBrowserService(config, profileId);
    return data;
  }

  async function startBrowsers(profileIds: string[]) {
    const data = await startBrowsersService(config, profileIds);
    return data;
  }

  async function startOnceBrowser(param: StartOnceBrowserParam) {
    const data = await startOnceBrowserService(config, param);
    return data;
  }

  async function stopBrowser(profileId: string) {
    const data = await stopBrowserService(config, profileId);
    return data;
  }

  async function stopBrowsers(profileIds: string[]) {
    const data = await stopBrowsersService(config, profileIds);
    return data;
  }

  async function getBrowsers(status?: BrowserStatus) {
    const data = await getBrowsersService(config, status);
    return data;
  }

  async function getBrowserPages(profileId: string) {
    const data = await getBrowserPagesService(config, profileId);
    return data;
  }

  async function getBrowserDebugger(profileId: string) {
    const data = await getBrowserDebuggerService(config, profileId);
    return data;
  }

  return {
    startBrowser,
    startBrowsers,
    startOnceBrowser,
    stopBrowser,
    stopBrowsers,
    getBrowsers,
    getBrowserPages,
    getBrowserDebugger,
  };
}

export default browsersController;
