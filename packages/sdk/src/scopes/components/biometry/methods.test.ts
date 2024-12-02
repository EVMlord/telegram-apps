import { beforeEach, describe, expect, it, vi } from 'vitest';

import { mockPostEvent } from '@test-utils/mockPostEvent.js';
import { resetPackageState } from '@test-utils/reset/reset.js';
import { setMaxVersion } from '@test-utils/setMaxVersion.js';
import { mockMiniAppsEnv } from '@test-utils/mockMiniAppsEnv.js';
import { testSafety } from '@test-utils/predefined/testSafety.js';
import { testIsSupported } from '@test-utils/predefined/testIsSupported.js';

import {
  mount,
  unmount,
  isSupported,
} from './methods.js';
import {
  isMounted,
} from './signals.js';

beforeEach(() => {
  resetPackageState();
  vi.restoreAllMocks();
  mockPostEvent();
});

function setAvailable() {
  setMaxVersion();
  mockMiniAppsEnv();
  isMounted.set(true);
}

// support checks.
describe.each([
  ['mount', mount],
  // ['updateToken', updateToken],
  // ['requestAccess', requestAccess],
  // ['authenticate', authenticate],
  // ['openSettings', openSettings],
] as const)('%s', (name, fn) => {
  testSafety(fn, name, {
    component: 'biometry',
    minVersion: '7.2',
  });
});

describe('isSupported', () => {
  testIsSupported(isSupported, '7.2');
});

describe('unmount', () => {
  beforeEach(setAvailable);

  it('should set isMounted = false', () => {
    expect(isMounted()).toBe(true);
    unmount();
    expect(isMounted()).toBe(false);
  });
});