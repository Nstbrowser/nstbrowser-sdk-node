import request from '@/api/http.ts';

import type {
  NstResponse,
  SubClassConfig,
  BrowserRemoteDebuggerData,
  LaunchBrowserParam,
} from '@/types.ts';

export async function startedBrowserService(config: SubClassConfig, profileId: string) {
  const res = await request<NstResponse<BrowserRemoteDebuggerData>>({
    url: config.baseUrl + `/devtool/browser/${profileId}`,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function launchNewBrowserService(config: SubClassConfig, cf: string) {
  const res = await request<NstResponse<BrowserRemoteDebuggerData>>({
    url: config.baseUrl + `/devtool/launch`,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
    params: {
      config: cf,
    },
  });

  return res;
}

export async function launchExistBrowserService(config: SubClassConfig, profileId: string, param?: LaunchBrowserParam) {
  const res = await request<NstResponse<BrowserRemoteDebuggerData>>({
    url: config.baseUrl + `/devtool/launch/${profileId}`,
    method: 'get',
    params: {
      config: param?.config,
    },
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}