import request from '@/api/http';
import {
  BrowserRemoteDebuggerData,
  ConnectBrowserParam,
  NstResponse,
  StartOnceBrowserParam,
  SubClassConfig,
} from '@/types';

export async function connectBrowserService(
  config: SubClassConfig,
  profileId: string,
  param: ConnectBrowserParam,
) {
  const url = `${config.baseUrl}/connect/${profileId}`;
  const res = await request<NstResponse<BrowserRemoteDebuggerData>>({
    url,
    method: 'get',
    params: {
      config: param,
    },
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function connectOnceBrowserService(
  config: SubClassConfig,
  param: StartOnceBrowserParam,
) {
  const url = `${config.baseUrl}/connect`;
  const res = await request<NstResponse<BrowserRemoteDebuggerData>>({
    url,
    method: 'get',
    params: {
      config: param,
    },
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}
