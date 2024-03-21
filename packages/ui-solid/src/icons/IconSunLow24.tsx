import type { Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '../types/jsx.js';

export const IconSunLow24: Component<JSXIntrinsicElementAttrs<'svg'>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 15.45a3.45 3.45 0 1 0 0-6.9 3.45 3.45 0 0 0 0 6.9m0 1.8a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5" clip-rule="evenodd"/><path fill="currentColor" d="M19.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m15 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-17 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m15 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.5 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6.5-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6.5-15a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
  );
};