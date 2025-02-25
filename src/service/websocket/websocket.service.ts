import request from '@/api/http.ts';
import type { NstResponse, SubClassConfig } from '@/types.ts';

export async function websocketService(config: SubClassConfig, message: string) {
  const res = await request<NstResponse<string>>({
    url: config.baseUrl + '/connection/websocket',
    method: 'post',
    data: message,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}
