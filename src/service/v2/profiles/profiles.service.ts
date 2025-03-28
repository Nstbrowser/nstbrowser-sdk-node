import request from '@/api/http';
import {
  BatchUpdateProfilesTagParam,
  BatchUpdateProxyData,
  CreateProfileParam,
  CreateProfileResponse,
  NstResponse,
  ProfileListResponse,
  ProfileParams,
  SubClassConfig,
  TagsItem,
} from '@/types';

export async function updateProfileProxyService(
  config: SubClassConfig,
  profileId: string,
  data: BatchUpdateProxyData['proxyConfig'],
) {
  const url = `${config.baseUrl}/profiles/${profileId}/proxy`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'put',
    data,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function resetProfileProxyService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/profiles/${profileId}/proxy`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function createProfileTagsService(
  config: SubClassConfig,
  profileId: string,
  data: TagsItem[],
) {
  const url = `${config.baseUrl}/profiles/${profileId}/tags`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'post',
    data,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function updateProfileTagsService(
  config: SubClassConfig,
  profileId: string,
  data: TagsItem[],
) {
  const url = `${config.baseUrl}/profiles/${profileId}/tags`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'put',
    data,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function clearProfileTagsService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/profiles/${profileId}/tags`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function batchUpdateProxyService(
  config: SubClassConfig,
  data: BatchUpdateProxyData,
) {
  const url = `${config.baseUrl}/profiles/proxy/batch`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'put',
    data,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function batchResetProfileProxyService(
  config: SubClassConfig,
  profileIds: string[],
) {
  const url = `${config.baseUrl}/profiles/proxy/batch`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    data: profileIds,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function batchCreateProfileTagsService(
  config: SubClassConfig,
  data: BatchUpdateProfilesTagParam,
) {
  const url = `${config.baseUrl}/profiles/tags/batch`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'post',
    data,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function batchUpdateProfileTagsService(
  config: SubClassConfig,
  data: BatchUpdateProfilesTagParam,
) {
  const url = `${config.baseUrl}/profiles/tags/batch`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'put',
    data,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function batchClearProfileTagsService(
  config: SubClassConfig,
  profileIds: string[],
) {
  const url = `${config.baseUrl}/profiles/tags/batch`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    data: profileIds,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function createProfileService(
  config: SubClassConfig,
  data: CreateProfileParam,
) {
  const url = `${config.baseUrl}/profiles`;
  const res = await request<NstResponse<CreateProfileResponse>>({
    url,
    method: 'post',
    data,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function deleteProfileService(
  config: SubClassConfig,
  profileId: string,
) {
  const url = `${config.baseUrl}/profiles/${profileId}`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function deleteProfilesService(
  config: SubClassConfig,
  profileIds: string[],
) {
  const url = `${config.baseUrl}/profiles`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'delete',
    data: profileIds,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function getProfilesService(
  config: SubClassConfig,
  params?: ProfileParams,
) {
  const url = `${config.baseUrl}/profiles`;
  const res = await request<NstResponse<ProfileListResponse>>({
    url,
    method: 'get',
    params,
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}

export async function getProfileTagsService(config: SubClassConfig) {
  const url = `${config.baseUrl}/profiles/tags`;
  const res = await request<NstResponse<any>>({
    url,
    method: 'get',
    timeout: config.timeout,
    headers: { 'x-api-key': config.apiKey },
  });
  return res;
}
