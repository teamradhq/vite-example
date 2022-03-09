import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}

import { JSDOM } from 'jsdom';
const dom = new JSDOM();

declare global {
  let OLD_ENV: NodeJS.ProcessEnv;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
(global as any).document = dom.window.document;
(global as any).window = dom.window;
(global as any).OLD_ENV = { ...process.env };
/* eslint-enable @typescript-eslint/no-explicit-any */

