// locals.controller.ts
import { clearProfileCacheService, clearProfileCookiesService } from '@/service/v2/locals/locals.service';
import type { SubClassConfig } from '@/types';

function localsController(config: SubClassConfig) {
  function clearProfileCache(profileId: string) {
    const data = clearProfileCacheService(config, profileId);
    return data;
  }

  function clearProfileCookies(profileId: string) {
    const data = clearProfileCookiesService(config, profileId);
    return data;
  }

  return {
    clearProfileCache,
    clearProfileCookies,
  };
}

export default localsController;
