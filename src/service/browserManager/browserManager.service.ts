import request from '@/api/http.ts';
import type {
  NstResponse,
  RunningBrowserInfo,
  SubClassConfig,
  BrowserForceStart,
} from '@/types.ts';

export async function startService(config: SubClassConfig, profileId: string) {
  const url = config.baseUrl + `/browser/start/${profileId}`;
  const data = await request<NstResponse<any>>({
    url,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}

export async function startSomeService(config: SubClassConfig, profileIds: string[]) {
  const data = await request<NstResponse<any>>({
    url: config.baseUrl + '/browser/startSome',
    method: 'post',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
    data: profileIds,
  });

  return data;
}

export async function stopService(config: SubClassConfig, profileId: string) {
  const url = config.baseUrl + `/browser/stop/${profileId}`;
  const data = await request<NstResponse<any>>({
    url,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}

export async function stopSomeService(config: SubClassConfig, profileIds: string[]) {
  const data = await request<NstResponse<any>>({
    url: config.baseUrl + '/browser/stopSome',
    method: 'post',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
    data: profileIds,
  });

  return data;
}

export async function stopAllService(config: SubClassConfig) {
  const data = await request<NstResponse<any>>({
    url: config.baseUrl + '/browser/stopAll',
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}

export async function getRunningBrowserAllService(config: SubClassConfig) {
  const data = await request<NstResponse<RunningBrowserInfo[]>>({
    url: config.baseUrl + '/browser/runningAll',
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}

export async function getRunningBrowserService(config: SubClassConfig) {
  const data = await request<NstResponse<RunningBrowserInfo[]>>({
    url: config.baseUrl + '/browser/running',
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}


export async function getRemoteWebSocketDebuggingURLService(config: SubClassConfig, profileId: string) {
  const url = config.baseUrl + `/browser/devtool/${profileId}`;
  const data = await request<NstResponse<string>>({
    url,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}

export async function forceStartService(config: SubClassConfig, profileId: string) {
  const url = config.baseUrl + `/browser/force_start/${profileId}`;
  const data = await request<NstResponse<BrowserForceStart>>({
    url,
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}

export async function getProfilesStatusService(config: SubClassConfig) {
  const data = await request<NstResponse<any>>({
    url: config.baseUrl + '/browser/profiles/status',
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return data;
}
