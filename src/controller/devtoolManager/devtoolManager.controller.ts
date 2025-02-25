import {
  launchNewBrowserService,
  launchExistBrowserService,
} from '@/service/devtoolManager/devtoolManager.service';

import type {
  DevtoolManager,
  SubClassConfig,
  LaunchBrowserParam,
} from '@/types.ts';

function devtoolManager(config: SubClassConfig): DevtoolManager {
  function launchNewBrowser(cf: string) {
    const data = launchNewBrowserService(config, cf);

    return data;
  }

  function launchExistBrowser(profileId: string, param?: LaunchBrowserParam) {
    const data = launchExistBrowserService(config, profileId, param);

    return data;
  }

  return {
    launchNewBrowser,
    launchExistBrowser,
  }
}

export default devtoolManager;
