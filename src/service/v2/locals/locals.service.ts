import request from '@/api/http';
import { NstResponse, SubClassConfig } from '@/types';

export async function clearProfileCacheService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/local/profiles/${profileId}`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function clearProfileCookiesService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/local/profiles/${profileId}/cookies`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}
