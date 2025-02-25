export interface NstResponse<T> {
  data: T;
  err: boolean;
  msg: string;
  code: number;
}

export interface PageQueryResponse {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
}

export type KernelType = 0 | 1;

export type PlatForm = 0 | 1 | 2 | 3 | 4;

export type KernelInfo = {
  name: string;
  kernelType: KernelType;
  kernelMilestone: string;
  customVersion: string;
  path: string;
  size: number;
  formatSize: string;
};

export type RunningBrowserInfo = {
  kernelType: KernelInfo;
  name: string;
  profileId: string;
  remoteDebuggingPort: number;
  running: boolean;
  userDirPath: string;
  version: string;
};

export type SubClassConfig = {
  apiKey: string;
  timeout: number;
  baseUrl: string;
};

export type NstBrowserOption = {
  apiAddress?: string;
  timeout: number;
};

export type ProfileFingerPrint = {
  setting: {
    profileId: string;
    name: string;
    groupId: string;
    hash: string;
    version: string;
    cookies: object[];
    startupUrls: string[];
    bookmarks: string[];
    port: string;
    proxy: string;
    kernel: number;
    kernelVersion: string;
    platform: PlatForm;
    agentUrl: string;
    extensionsIds: string[];
  };
  profile: {
    ui: {};
    global: {};
    flags: {};
    encrypted: boolean;
    fingerprint: {};
    metadata: {};
    unstable: {};
  };
};

export type BrowserForceStart = {
  port: number;
  webSocketDebuggerUrl: string;
};

export interface BrowserProfileStatus {
  kernel: KernelType;
  kernelMilestone: string;
  name: string;
  platform: PlatForm;
  profileId: string;
  remoteDebuggingPort: number;
  running: boolean;
  starting: boolean;
  stopping: boolean;
}

export interface CreateProfileParam {
  groupId?: string;
  kernel: KernelType;
  kernelMilestone: string;
  name: string;
  platform: PlatForm;
}

export interface CreateProfileResponse {
  _id: string;
  createdAt: string;
  fingerprintId: string;
  groupId: string;
  kernel: number;
  kernelMilestone: string;
  kernelVersion: string;
  name: string;
  note: string;
  platform: number;
  platformVersion: string;
  profileId: string;
  saveLocal: boolean;
  status: number;
  tags: string[];
  teamId: string;
  uaFullVersion: string;
  updatedAt: string;
  userId: string;
}

export interface ProfileParams {
  groupId?: string;
  page?: string;
  pageSize?: string;
  s?: string;
  tags?: string;
}

export interface ProfileItem {
  fingerprintId: string;
  groupId: string;
  kernel: number;
  kernelMilestone: string;
  kernelVersion: string;
  name: string;
  note: string;
  platform: number;
  platformVersion: string;
  profileId: string;
  proxyConfig: {
    checker: string;
    host: string;
    password: string;
    port: string;
    protocol: string;
    proxySetting: string;
    proxyType: string;
    url: string;
    username: string;
  };
  tags: string[];
  teamId: string;
  uaFullVersion: string;
  userId: string;
}

export interface ProfileListResponse extends PageQueryResponse {
  docs: ProfileItem[];
}

export interface BatchUpdateProxyData {
  profileIds?: string[];
  proxyConfig: {
    checker: string;
    host: string;
    password: string;
    port: string;
    protocol: string;
    proxySetting: string;
    proxyType: string;
    url: string;
    username: string;
  };
}

export interface LaunchExistBrowserParam {
  'x-api-key': string;
  config?: string;
}

export interface BrowserRemoteDebuggerData {
  port: number;
  webSocketDebuggerUrl: string;
  profileId: string;
}

export interface LaunchBrowserParam {
  config?: string;
}

export interface TagsItem {
  color: string;
  name: string;
}

export interface BatchUpdateProfilesTagParam {
  profileIds: string[];
  tags: TagsItem[];
}

export interface AgentManager {
  clearProfileCache: (profileId: string) => Promise<NstResponse<any>>;
}

export interface BrowserManager {
  forceStart: (profileId: string) => Promise<NstResponse<any>>;
  start: (profileId: string) => Promise<NstResponse<any>>;
  startSome: (profileIds: string[]) => Promise<NstResponse<any>>;
  stop: (profileId: string) => Promise<NstResponse<any>>;
  stopSome: (profileIds: string[]) => Promise<NstResponse<any>>;
  stopAll: () => Promise<NstResponse<any>>;
  getRunningBrowserAll: () => Promise<NstResponse<RunningBrowserInfo[]>>;
  getRemoteDebuggingAddress: (
    profileId: string,
  ) => Promise<NstResponse<string>>;
  getProfilesStatus: () => Promise<NstResponse<BrowserProfileStatus[]>>;
}

export interface ProfileManager {
  createProfile: (param: CreateProfileParam) => Promise<NstResponse<any>>;
  deleteProfile: (profileId: string) => Promise<NstResponse<any>>;
  profiles: (param: ProfileParams) => Promise<NstResponse<any>>;
  batchUpdateProxy: (param: BatchUpdateProxyData) => Promise<NstResponse<any>>;
  getProfileTags: () => Promise<NstResponse<any>>;
  batchUpdateProfileTags: (
    param: BatchUpdateProfilesTagParam,
  ) => Promise<NstResponse<any>>;
  batchCreateProfileTags: (
    param: BatchUpdateProfilesTagParam,
  ) => Promise<NstResponse<any>>;
  batchClearProfileTags: (profileIds: string[]) => Promise<NstResponse<any>>;
  clearCookies: (profileId: string) => Promise<NstResponse<any>>;
  clearProfileCache: (profileId: string) => Promise<NstResponse<any>>;
  batchClearProfileCache: (profileIds: string[]) => Promise<NstResponse<any>>;
}

export interface WebsocketManager {
  websocket: (message: string) => Promise<NstResponse<string>>;
}

export interface CookieManager {
  clearCookies: (profileId: string) => Promise<NstResponse<any>>;
}

export interface DevtoolManager {
  launchNewBrowser: (config: string) => Promise<NstResponse<any>>;
  launchExistBrowser: (
    profileId: string,
    config?: LaunchBrowserParam,
  ) => Promise<NstResponse<any>>;
}
