import {
  deleteProfileService,
  createProfileService,
  getProfilesService,
  batchUpdateProxyService,
  getProfileTagsService,
  batchUpdateProfileTagsService,
  batchCreateProfileTagsService,
  batchClearProfileTagsService,
  clearCookiesService,
  clearProfileCacheService,
  batchClearProfileCacheService,
} from '@/service/profileManager/profileManager.service.ts';

import type {
  ProfileManager,
  SubClassConfig,
  CreateProfileParam,
  ProfileParams,
  BatchUpdateProxyData,
  BatchUpdateProfilesTagParam,
} from '@/types.ts';

function profileManager(config: SubClassConfig): ProfileManager {
  async function deleteProfile(profileId: string) {
    const data = await deleteProfileService(config, profileId);

    return data;
  }

  async function createProfile(param: CreateProfileParam) {
    const data = await createProfileService(config, param);

    return data;
  }

  async function profiles(params: ProfileParams) {
    const data = await getProfilesService(config, params);

    return data;
  }

  async function batchUpdateProxy(param: BatchUpdateProxyData) {
    const data = await batchUpdateProxyService(config, param);

    return data;
  }

  async function getProfileTags() {
    const data = await getProfileTagsService(config);

    return data;
  }

  async function batchUpdateProfileTags(param: BatchUpdateProfilesTagParam) {
    const data = await batchUpdateProfileTagsService(config, param);

    return data;
  }

  async function batchCreateProfileTags(param: BatchUpdateProfilesTagParam) {
    const data = await batchCreateProfileTagsService(config, param);

    return data;
  }

  async function batchClearProfileTags(profileIds: string[]) {
    const data = await batchClearProfileTagsService(config, profileIds);

    return data;
  }

  async function clearCookies(profileId: string) {
    const data = await clearCookiesService(config, profileId);

    return data;
  }

  async function clearProfileCache(profileId: string) {
    const data = await clearProfileCacheService(config, profileId);

    return data;
  }

  async function batchClearProfileCache(profileIds: string[]) {
    const data = await batchClearProfileCacheService(config, profileIds);

    return data;
  }

  return {
    profiles,
    createProfile,
    deleteProfile,
    batchUpdateProxy,
    getProfileTags,
    batchUpdateProfileTags,
    batchCreateProfileTags,
    batchClearProfileTags,
    clearCookies,
    clearProfileCache,
    batchClearProfileCache,
  };
}

export default profileManager;
