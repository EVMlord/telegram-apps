import React, { type ComponentType } from 'react';

import { useWebApp } from './useWebApp.js';
import type { WebApp } from './types.js';

/**
 * HOC which passes WebApp SDK component to wrapped React component.
 * @param Component - component to wrap.
 */
export function withWebApp<P extends { webApp?: WebApp }>(
  Component: ComponentType<P>,
): ComponentType<Omit<P, 'webApp'>> {
  return function WithWebApp(props: Omit<P, 'webApp'>) {
    const p = { ...props, webApp: useWebApp() } as P;

    return <Component {...p} />;
  };
}
