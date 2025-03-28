import request from '@/api/http';
import {
  BrowserRemoteDebuggerData,
  StartOnceBrowserParam,
  NstResponse,
  SubClassConfig,
  BrowserPagesData,
  BrowserStatus,
  RunningBrowserInfo,
} from '@/types';

export async function startBrowserService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/browsers/${profileId}`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'post',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function startBrowsersService(
  config: SubClassConfig,
  profileIds: string[],
) {
  const url = `${config.baseUrl}/browsers`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'post',
    data: profileIds,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function startOnceBrowserService(
  config: SubClassConfig,
  data: StartOnceBrowserParam,
) {
  const url = `${config.baseUrl}/browsers/once`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'post',
    data,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function stopBrowserService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/browsers/${profileId}`;
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

export async function stopBrowsersService(
  config: SubClassConfig,
  profileIds: string[],
) {
  const url = `${config.baseUrl}/browsers`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    data: profileIds,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function getBrowsersService(
  config: SubClassConfig,
  status?: BrowserStatus,
) {
  const url = `${config.baseUrl}/browsers`;
  const res = await request<NstResponse<RunningBrowserInfo[]>>({
    url,
    method: 'get',
    params: status ? { status } : undefined,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function getBrowserPagesService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/browsers/${profileId}/pages`;
  const res = await request<NstResponse<BrowserPagesData[]>>({
    url,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function getBrowserDebuggerService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/browsers/${profileId}/debugger`;
  const res = await request<NstResponse<BrowserRemoteDebuggerData>>({
    url,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}
