import puppeteer from 'puppeteer-core';
import type { Browser, ScreenshotOptions } from 'puppeteer-core';

export interface BrowserlessConfig {
  platform?: 'windows' | 'mac' | 'linux';
  kernel?: 'chromium';
  kernelMilestone?: '128';
  args?: Record<string, string>;
  fingerprint?: Record<string, any>;
};

export interface BrowserlessOptions {
  apiKey: string;
  proxy: string;
  baseURL?: string;
};

export interface LoadOptions extends BrowserlessConfig {
  sessionId?: string;
};

export interface MyScreenshotOptions extends BrowserlessConfig {
  sessionId?: string;
  fullPage?: boolean;
  encoding?: 'base64' | 'binary';
  type?: 'png' | 'jpeg' | 'webp';
}

export interface DebugConnectionURLsData {
  debuggerFullscreenUrl: string;
  wsUrl: string;
  debuggerUrl: string;
}

export default class Browserless {
  private apiKey: string;
  private baseURL: string;
  private proxy: string;

  constructor(options: BrowserlessOptions) {
    if (!options.proxy) {
      throw new Error('NST ERROR: please add proxy!');
    }

    // support usage with environment variables
    this.apiKey = options.apiKey || process.env.NSTBROWSERLESS_API_KEY as string || '';
    if (!this.apiKey) {
      throw new Error('NST ERROR: please set your api-key!');
    }

    this.proxy = options.proxy;
    this.baseURL = options.baseURL || 'https://less.nstbrowser.io';
  }

  public async load(url: string, options: LoadOptions): Promise<string> {
    if (!url) {
      throw new Error('Page URL was not provided');
    }

    return this.loadPage(url, options);
  }

  public async screenshot(url: string, options: MyScreenshotOptions = {}) {
    if (!url) {
      throw new Error('Page URL was not provided');
    }

    return this.doScreenshot(url, options);
  }

  public getConnectURL(sessionId?: string) {
    // baseUrl/connect?query can be connect
    if (!sessionId) {
      const config = {
        proxy: this.proxy,
      };
      const query = new URLSearchParams({
        token: this.apiKey,
        config: JSON.stringify(config),
      });
      return `${this.baseURL}/connect?${query.toString()}`;
    }
    // if set sessionId, should fetch api /connect?
  }

  private async getBrowser(config: any) {
    const wsURL = config.sessionId ? `${this.baseURL}/connect/${config.sessionId}` : `${this.baseURL}/connect`;

    if (config.sessionId) delete config.sessionId;

    const query = new URLSearchParams({
      token: this.apiKey,
      config: JSON.stringify(config),
    });

    try {
      const browser = await puppeteer.connect({
        browserWSEndpoint: `${wsURL}?${query.toString()}`,
        defaultViewport: null,
      });

      return browser;
    } catch (error) {
      throw new Error(`Failed to connect to Nstbrowser: ${error}`);
    }
  }

  private async getPage(browser: Browser) {
    const pages = await browser.pages();
    const page = await pages[0];

    return page;
  }

  private async loadPage(url: string, options: LoadOptions) {
    const config = Object.assign({
      proxy: this.proxy
    }, options);
    const browser = await this.getBrowser(config);
    const page = await this.getPage(browser);
    page.goto(url);

    const html = await page.content();

    await browser.close();

    return html;
  }

  private async doScreenshot(url: string, options: MyScreenshotOptions) {
    const config = Object.assign({
      proxy: this.proxy
    }, options);
    const browser = await this.getBrowser(config);
    const page = await this.getPage(browser);

    await page.goto(url);

    const screenshotOptions: ScreenshotOptions = {
      fullPage: config.fullPage,
      encoding: config.encoding || 'base64',
      type: config.type || 'png',
    }

    const screenshot = await page.screenshot(screenshotOptions);
    await browser.close();

    return screenshot;
  }
}
