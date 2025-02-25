import * as service from '@/service/cookieManager/cookieManager.service.ts';
import type { CookieManager, SubClassConfig } from '@/types.ts';

function cookieManager(config: SubClassConfig): CookieManager {
  function clearCookies(profileId: string) {
    return service.clearLocalCookies(config, profileId);
  }

  return {
    clearCookies,
  };
}

export default cookieManager;
