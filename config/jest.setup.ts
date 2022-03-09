import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}

import { JSDOM } from 'jsdom';
const dom = new JSDOM();

/* eslint-disable @typescript-eslint/no-explicit-any */
(global as any).document = dom.window.document;
(global as any).window = dom.window;
/* eslint-enable @typescript-eslint/no-explicit-any */
