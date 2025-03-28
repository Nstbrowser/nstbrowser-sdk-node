// profiles.controller.ts
import {
  updateProfileProxyService,
  resetProfileProxyService,
  createProfileTagsService,
  updateProfileTagsService,
  clearProfileTagsService,
  batchUpdateProxyService,
  batchResetProfileProxyService,
  batchCreateProfileTagsService,
  batchUpdateProfileTagsService,
  batchClearProfileTagsService,
  createProfileService,
  deleteProfileService,
  deleteProfilesService,
  getProfilesService,
  getProfileTagsService,
} from '@/service/v2/profiles/profiles.service';

import type {
  BatchUpdateProxyData,
  BatchUpdateProfilesTagParam,
  CreateProfileParam,
  ProfileParams,
  SubClassConfig,
  TagsItem,
} from '@/types';

function profilesController(config: SubClassConfig) {
  async function updateProfileProxy(profileId: string, param: BatchUpdateProxyData['proxyConfig']) {
    const data = await updateProfileProxyService(config, profileId, param);
    return data;
  }

  async function resetProfileProxy(profileId: string) {
    const data = await resetProfileProxyService(config, profileId);
    return data;
  }

  async function createProfileTags(profileId: string, param: TagsItem[]) {
    const data = await createProfileTagsService(config, profileId, param);
    return data;
  }

  async function updateProfileTags(profileId: string, param: TagsItem[]) {
    const data = await updateProfileTagsService(config, profileId, param);
    return data;
  }

  async function clearProfileTags(profileId: string) {
    const data = await clearProfileTagsService(config, profileId);
    return data;
  }

  async function batchUpdateProxy(param: BatchUpdateProxyData) {
    const data = await batchUpdateProxyService(config, param);
    return data;
  }

  async function batchResetProfileProxy(profileIds: string[]) {
    const data = await batchResetProfileProxyService(config, profileIds);
    return data;
  }

  async function batchCreateProfileTags(param: BatchUpdateProfilesTagParam) {
    const data = await batchCreateProfileTagsService(config, param);
    return data;
  }

  async function batchUpdateProfileTags(param: BatchUpdateProfilesTagParam) {
    const data = await batchUpdateProfileTagsService(config, param);
    return data;
  }

  async function batchClearProfileTags(profileIds: string[]) {
    const data = await batchClearProfileTagsService(config, profileIds);
    return data;
  }

  async function createProfile(param: CreateProfileParam) {
    const data = await createProfileService(config, param);
    return data;
  }

  async function deleteProfile(profileId: string) {
    const data = await deleteProfileService(config, profileId);
    return data;
  }

  async function deleteProfiles(profileIds: string[]) {
    const data = await deleteProfilesService(config, profileIds);
    return data;
  }

  async function getProfiles(param?: ProfileParams) {
    const data = await getProfilesService(config, param);
    return data;
  }

  async function getProfileTags() {
    const data = await getProfileTagsService(config);
    return data;
  }

  return {
    updateProfileProxy,
    resetProfileProxy,
    createProfileTags,
    updateProfileTags,
    clearProfileTags,
    batchUpdateProxy,
    batchResetProfileProxy,
    batchCreateProfileTags,
    batchUpdateProfileTags,
    batchClearProfileTags,
    createProfile,
    deleteProfile,
    deleteProfiles,
    getProfiles,
    getProfileTags,
  };
}

export default profilesController;
