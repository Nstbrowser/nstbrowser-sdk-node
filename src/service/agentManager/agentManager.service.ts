import request from '@/api/http.ts';
import type { SubClassConfig } from '@/types.ts';

export async function clearProfileCacheService(config: SubClassConfig, profileId: string) {
  const url = config.baseUrl + `/agent/cache/profile/${profileId}`;
  const res = await request<any>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}
