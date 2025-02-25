# NST BROWSER NODE SDK
Nst browser node sdk

## Installing
Using npm:

```bash
$ npm install nstbrowser-sdk-node
```

Using pnpm:

```bash
$ pnpm install nstbrowser-sdk-node
```

Using yarn:

```bash
$ yarn add nstbrowser-sdk-node
```

## How To Use

javascript:

```js
import { NstBrowser } from 'nstbrowser-sdk-node';

const nst = new NstBrowser('your api key', {
  timeout: 60000,
  apiAddress: 'http://localhost:8848/api/agent'
});
const { getLatestVersion } = nst.agentManager();
getLatestVersion();
```

typescript:

```ts
import { NstBrowser, NstBrowserTypes } from 'nstbrowser-sdk-node';

const nst: NstBrowserTypes = new NstBrowser('your api key', {
  timeout: 60000,
  apiAddress: 'http://localhost:8848/api/agent'
});
const { getLatestVersion } = nst.agentManager();
getLatestVersion();
```

Browserless:

```js
import { Browserless } from 'nstbrowser-sdk-node';

const browserless = new Browserless({
  apiKey: 'your api key',
  proxy: 'your proxy', // required
})

browserless.load('https://nstbrowser.io').then(text => {
  
})
```

## NstBrowser Node Sdk Response Schema:

```js
{
  // `data` is the response
  "data": {},
    
  // `code` is the HTTP status code
  "code": 200,
  
  // `err` is the request's status
  "err": false,
  
  "msg": "success"
}
```



## BrowserManager

### forceStart

force start the browser by profileId
```ts
const { forceStart } = nst.browserManager();
forceStart(profileId: string);
```

### start

start the browser by profileId

```ts
const { start } = nst.browserManager();
start(profileId: string);
```

### startSome

batch start browser by profileIds

```ts
const { startSome } = nst.browserManager();
startSome(profileIds: string[]);
```

### stop

stop the browser by profileId

```ts
const { stop } = nst.browserManager();
stop(profileId: string);
```

### stopSome

batch stop browser by profileIds

```ts
const { stopSome } = nst.browserManager();
stopSome(profileIds: string[]);
```

### stopAll

stop all running browser

```ts
const { stopAll } = nst.browserManager();
stopAll();
```

### getRunningBrowserAll

get all running browser's info

```ts
const { getRunningBrowserAll } = nst.browserManager();
getRunningBrowserAll();
```

response data:

```js
[
  {
    profileId: "string",
    name: "string",
    version: "string",
    kernelType: "string", // nstchrome | nstfirefox
    running: "boolean",
    userDirPath: "string"
  }
]
```

### getRemoteDebuggingAddress

get browser remote web socket debugging url

```ts
const { getRemoteDebuggingAddress } = nst.browserManager();
getRemoteDebuggingAddress(profileId: string);
```

### getProfilesStatus

get all profiles status
```ts
const { getProfilesStatus } = nst.browserManager();
getProfilesStatus();
```



## ProfileManager

### createProfile

create profile

[Detail docs](https://apidocs.nstbrowser.io/api-5496096)

```ts
const { createProfile } = nst.profileManager();
createProfile({
  "kernel": "chromium",
  "kernelMilestone": "120",
  "name": "Profile",
  "platform": "windows"
});
```

response data:
```js
{
  "_id": "string",
  "createdAt": "string",
  "fingerprintId": "string",
  "groupId": "string",
  "kernel": 0,
  "kernelMilestone": "string",
  "kernelVersion": "string",
  "name": "string",
  "note": "string",
  "platform": 0,
  "platformVersion": "string",
  "profileId": "string",
  "saveLocal": true,
  "status": 0,
  "tags": [
    "string"
  ],
  "teamId": "string",
  "uaFullVersion": "string",
  "updatedAt": "string",
  "userId": "string"
}
```

### deleteProfile

delete profile by profileId

```ts
const { deleteProfile } = nst.profileManager();
deleteProfile(profileId: string);
```

### profiles

list profiles

```ts
const { profiles } = nst.profileManager();
profiles({
  	page: 1,
	  pageSize: 10,
  	s: '',
  	groupId: ''
});
```

response data:

```js
"data": {
    "docs": [
        {
            "fingerprintId": "string",
            "groupId": "string",
            "kernel": 0,
            "kernelMilestone": "string",
            "kernelVersion": "string",
            "name": "string",
            "note": "string",
            "platform": 0,
            "platformVersion": "string",
            "profileId": "string",
            "proxyConfig": {
                "checker": "string",
                "host": "string",
                "password": "string",
                "port": "string",
                "protocol": "string",
                "proxySetting": "string",
                "proxyType": "string",
                "url": "string",
                "username": "string"
            },
            "tags": [
                "string"
            ],
            "teamId": "string",
            "uaFullVersion": "string",
            "userId": "string"
        }
    ],
    "hasNextPage": true,
    "hasPrevPage": true,
    "limit": 0,
    "nextPage": 0,
    "offset": 0,
    "page": 0,
    "pagingCounter": 0,
    "prevPage": 0,
    "totalDocs": 0,
    "totalPages": 0
}
```

### batchUpdateProxy

batch update proxy for profiles, if proxy url is empty,you should set value to: protocol、host and port, otherwise set proxy url just fine.

```ts
const { batchUpdateProxy } = nst.profileManager();
batchUpdateProxy({
  "profileIds": ["string"],
  "proxyConfig": {
    "checker": "string",
    "host": "string",
    "password": "string",
    "port": "string",
    "protocol": "string",
    "proxySetting": "string",
    "proxyType": "string",
    "url": "string",
    "username": "string"
  }
});
```

### getProfileTags
get all profile tags

```ts
const { getProfileTags } = nst.profileManager();
getProfileTags();
```

response data:

```js
[
  {
    color: "string",
    name: "string",
  }
]
```

### batchUpdateProfileTags
batch update profile tags

```ts
const { batchUpdateProfileTags } = nst.profileManager();

batchUpdateProfileTags({
  "profileIds": string[],
  "tags": {
    "color": string;
    "name": string;
  }[]
});
```

### batchCreateProfileTags
batch create profile tags

```ts
const { batchCreateProfileTags } = nst.profileManager();

batchCreateProfileTags({
  "profileIds": string[],
  "tags": {
    "color": string;
    "name": string;
  }[]
});
```

### batchClearProfileTags

batch clear profile tags

```ts
const { batchClearProfileTags } = nst.profileManager();

batchClearProfileTags({
  "profileIds": ["string"]
});
```

### clearCookies

clear local cookies by profileId

```ts
const { clearCookies } = nst.profileManager();
clearCookies("profileId")
```

### clearProfileCache

clear user profile dir.

```ts
const { clearProfileCache } = nst.profileManager();
clearProfileCache("profileId")
```

### batchClearProfileCache

batch clear user profile dir.

```ts
const { batchClearProfileCache } = nst.profileManager();
batchClearProfileCache(["profileId"])
```

## Devtool

### launchNewBrowser

launch new browser
[Detail docs](https://apidocs.nstbrowser.io/api-5418530)
```ts
const { launchNewBrowser } = nst.devtool();
launchNewBrowser(config);
```

response data:

```js
{
  "port": 0,
  "webSocketDebuggerUrl": "string"
}
```

### launchExistBrowser

launch exist browser
[Detail docs](https://apidocs.nstbrowser.io/api-5418531)
```ts
const { launchExistBrowser } = nst.devtool();
launchExistBrowser(profileId: string, {
	config?: string,
});
```

response data:

```js
{
  "port": 0,
  "webSocketDebuggerUrl": "string"
}
```