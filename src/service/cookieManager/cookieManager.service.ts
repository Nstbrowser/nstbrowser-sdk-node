import request from '@/api/http.ts';
import type { NstResponse, SubClassConfig } from '@/types.ts';

export async function clearLocalCookies(config: SubClassConfig, profileId: string) {
  const url = config.baseUrl + `/cookie/clear/${profileId}`;
  return await request<NstResponse<any>>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
}
