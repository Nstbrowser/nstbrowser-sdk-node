import { describe, it, beforeEach } from 'node:test';
import { expect } from 'chai';
import Browserless from '../src/browserless/index.ts';

describe('Browserless', () => {
  let browserless: Browserless;

  beforeEach(() => {
    browserless = new Browserless({
      apiKey: 'xxxx',
      proxy: 'xxxx',
    });
  });

  it('should load a webpage', async () => {
    const result = await browserless.load('https://example.com', {
      text: false
    })
    expect(result).contain('Example Domain')
  })

  it('should take a screenshot', { timeout: 15000 }, async () => {
    const result = await browserless.screenshot('https://example.com')
    expect(result.length).to.equal(35472)
  })
});
