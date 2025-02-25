import {
  forceStartService,
  startService,
  startSomeService,
  stopService,
  stopSomeService,
  stopAllService,
  getRunningBrowserAllService,
  getRemoteWebSocketDebuggingURLService,
  getProfilesStatusService,
} from '@/service/browserManager/browserManager.service.ts';

import type { BrowserManager, SubClassConfig } from '@/types.ts';

function browserManager(config: SubClassConfig): BrowserManager {
  async function forceStart(profileId: string) {
    const data = await forceStartService(config, profileId);

    return data;
  }

  async function start(profileId: string) {
    const data = await startService(config, profileId);

    return data;
  }

  async function startSome(profileIds: string[]) {
    const data = await startSomeService(config, profileIds);

    return data;
  }

  async function stop(profileId: string) {
    const data = await stopService(config, profileId);

    return data;
  }

  async function stopSome(profileIds: string[]) {
    const data = await stopSomeService(config, profileIds);

    return data;
  }

  async function stopAll() {
    const data = await stopAllService(config);

    return data;
  }

  async function getRunningBrowserAll() {
    const data = await getRunningBrowserAllService(config);

    return data;
  }

  async function getRemoteDebuggingAddress(profileId: string) {
    const data = await getRemoteWebSocketDebuggingURLService(config, profileId);

    return data;
  }

  async function getProfilesStatus() {
    const data = await getProfilesStatusService(config);

    return data;
  }

  return {
    getProfilesStatus,
    forceStart,
    start,
    startSome,
    stop,
    stopSome,
    stopAll,
    getRunningBrowserAll,
    getRemoteDebuggingAddress,
  };
}

export default browserManager;
