// cdp-endpoints.controller.ts
import {
  connectBrowserService,
  connectOnceBrowserService,
} from '@/service/v2/cdpEndpoints/cdpEndpoints.service';
import {
  SubClassConfig,
  ConnectBrowserParam,
  StartOnceBrowserParam,
} from '@/types';

function cdpEndpoints(config: SubClassConfig) {
  async function connectBrowser(profileId: string, param: ConnectBrowserParam) {
    const data = await connectBrowserService(config, profileId, param);
    return data;
  }

  async function connectOnceBrowser(param: StartOnceBrowserParam) {
    const data = await connectOnceBrowserService(config, param);
    return data;
  }

  return {
    connectBrowser,
    connectOnceBrowser,
  };
}

export default cdpEndpoints;
