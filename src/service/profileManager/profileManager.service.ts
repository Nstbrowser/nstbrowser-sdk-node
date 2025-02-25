import request from '@/api/http.ts';
import type {
  NstResponse,
  SubClassConfig,
  ProfileFingerPrint,
  CreateProfileParam,
  CreateProfileResponse,
  ProfileParams,
  ProfileListResponse,
  BatchUpdateProxyData,
  BatchUpdateProfilesTagParam,
} from '@/types.ts';

export async function deleteProfileService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = config.baseUrl + `/profile/${profileId}`;
  const res = await request<NstResponse<ProfileFingerPrint>>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function createProfileService(
  config: SubClassConfig,
  param: CreateProfileParam,
) {
  const url = config.baseUrl + `/profile`;
  const res = await request<NstResponse<CreateProfileResponse>>({
    url,
    method: 'post',
    data: param,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });
  return res;
}

export async function getProfilesService(
  config: SubClassConfig,
  params: ProfileParams,
) {
  const res = await request<NstResponse<ProfileListResponse>>({
    url: config.baseUrl + '/profile/list',
    method: 'get',
    params,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function batchUpdateProxyService(
  config: SubClassConfig,
  param: BatchUpdateProxyData,
) {
  const url = config.baseUrl + '/profile/proxy/batch';
  const res = await request<NstResponse<any>>({
    url,
    method: 'put',
    data: param,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function getProfileTagsService(config: SubClassConfig) {
  const res = await request<NstResponse<any>>({
    url: config.baseUrl + '/profile/tags',
    method: 'get',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function batchUpdateProfileTagsService(
  config: SubClassConfig,
  param: BatchUpdateProfilesTagParam,
) {
  const res = await request<NstResponse<any>>({
    url: config.baseUrl + '/profile/tags/batch',
    method: 'put',
    data: param,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function batchCreateProfileTagsService(
  config: SubClassConfig,
  param: BatchUpdateProfilesTagParam,
) {
  const res = await request<NstResponse<any>>({
    url: config.baseUrl + '/profile/tags/batch',
    method: 'post',
    data: param,
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function batchClearProfileTagsService(
  config: SubClassConfig,
  profileIds: string[],
) {
  const res = await request<NstResponse<any>>({
    url: config.baseUrl + '/profile/tags/batch',
    method: 'delete',
    data: {
      profileIds,
    },
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function clearCookiesService(config: SubClassConfig, profileId: string) {
  const res = await request<NstResponse<any>>({
    url: config.baseUrl + `/cookie/clear/${profileId}`,
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function clearProfileCacheService(config: SubClassConfig, profileId: string) {
  const res = await request<NstResponse<any>>({
    url: config.baseUrl + `/agent/cache/profile/${profileId}`,
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
  });

  return res;
}

export async function batchClearProfileCacheService(config: SubClassConfig, profileIds: string[]) {
  const res = await request<NstResponse<any>>({
    url: config.baseUrl + '/agent/cache/profile/batch',
    method: 'delete',
    timeout: config.timeout,
    headers: {
      'x-api-key': config.apiKey,
    },
    data: profileIds
  });

  return res;
}
