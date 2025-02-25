import {
  clearProfileCacheService,
} from '@/service/agentManager/agentManager.service.ts';
import type { AgentManager, SubClassConfig } from '@/types.ts';

function agentManager(config: SubClassConfig): AgentManager {
  async function clearProfileCache(profileId: string) {
    const data = await clearProfileCacheService(config, profileId);
    return data;
  }

  return {
    clearProfileCache,
  };
}

export default agentManager;
