// import agentManager from '@/controller/agentManager/agentManager.controller.ts';
import browserManager from './controller/browserManager/browserManager.controller.ts';
import profileManager from './controller/profileManager/profileManager.controller.ts';
import devtoolManager from './controller/devtoolManager/devtoolManager.controller.ts';

import browsersController from './controller/v2/browsers/browsers.controller.ts';
import profilesController from './controller/v2/profiles/profiles.controller.ts';
import cdpEndpointsController from './controller/v2/cdpEndpoints/cdpEndpoints.controller.ts';
import localsController from './controller/v2/locals/locals.controller.ts';

import Browserless from './browserless/index.ts';

import type { NstBrowserOption } from './types.ts';

/** A more standardized `NstBrowserV2` is recommended. */
class NstBrowser {
  static instance: null | NstBrowser = null;

  protected apiKey: string = '';
  protected timeout: number = 0;
  protected apiAddress: string = 'http://localhost:8848/api/agent';

  constructor(key: string, options?: NstBrowserOption) {
    if (NstBrowser.instance) {
      return NstBrowser.instance;
    }

    if (!key) {
      throw new Error('NST ERROR: please input a correct key!');
    }

    this.apiKey = key;
    this.timeout = options?.timeout ?? 0;
    if (options?.apiAddress) {
      this.apiAddress = options.apiAddress;
    }

    NstBrowser.instance = this;
  }

  // agentManager() {
  //   return agentManager({
  //     apiKey: this.apiKey,
  //     timeout: this.timeout,
  //     baseUrl: this.apiAddress,
  //   });
  // }

  browserManager() {
    return browserManager({
      apiKey: this.apiKey,
      timeout: this.timeout,
      baseUrl: this.apiAddress,
    });
  }

  profileManager() {
    return profileManager({
      apiKey: this.apiKey,
      timeout: this.timeout,
      baseUrl: this.apiAddress,
    });
  }

  // cookieManager() {
  //   return cookieManager({
  //     apiKey: this.apiKey,
  //     timeout: this.timeout,
  //     baseUrl: this.apiAddress,
  //   });
  // }

  devtool() {
    return devtoolManager({
      apiKey: this.apiKey,
      timeout: this.timeout,
      baseUrl: this.apiAddress,
    });
  }
}

class NstBrowserV2 {
  static instance: null | NstBrowserV2 = null;

  protected apiKey: string = '';
  protected timeout: number = 0;
  protected apiAddress: string = 'http://localhost:8848/api/v2';

  constructor(key: string, options?: NstBrowserOption) {
    if (NstBrowserV2.instance) {
      return NstBrowserV2.instance;
    }

    if (!key) {
      throw new Error('NST ERROR: please input a correct key!');
    }

    this.apiKey = key;
    this.timeout = options?.timeout ?? 0;
    if (options?.apiAddress) {
      this.apiAddress = options.apiAddress;
    }

    NstBrowserV2.instance = this;
  }

  browsers() {
    return browsersController({
      apiKey: this.apiKey,
      timeout: this.timeout,
      baseUrl: this.apiAddress,
    });
  }

  profiles() {
    return profilesController({
      apiKey: this.apiKey,
      timeout: this.timeout,
      baseUrl: this.apiAddress,
    });
  }

  cdpEndpoints() {
    return cdpEndpointsController({
      apiKey: this.apiKey,
      timeout: this.timeout,
      baseUrl: this.apiAddress,
    });
  }

  locals() {
    return localsController({
      apiKey: this.apiKey,
      timeout: this.timeout,
      baseUrl: this.apiAddress,
    });
  }
}

export type NstBrowserTypes = typeof NstBrowser;
export type NstBrowserV2Types = typeof NstBrowserV2;

export { NstBrowser, NstBrowserV2, Browserless };
