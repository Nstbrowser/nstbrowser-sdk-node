// import agentManager from '@/controller/agentManager/agentManager.controller.ts';
import browserManager from './controller/browserManager/browserManager.controller.ts';
import profileManager from './controller/profileManager/profileManager.controller.ts';
import devtoolManager from './controller/devtoolManager/devtoolManager.controller.ts';

import Browserless from './browserless/index.ts';

import type { NstBrowserOption } from './types.ts';

class NstBrowser {
  static instance: null | NstBrowser = null;

  protected apiKey: string = '';
  protected timeout: number = 0;
  protected apiAddress: string = 'http://localhost:8848/api/v1';

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

export type NstBrowserTypes = typeof NstBrowser;

export {
  NstBrowser,
  Browserless
};
