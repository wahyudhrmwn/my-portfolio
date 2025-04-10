// This is a minimal implementation of common Preline components
// to avoid the import error while keeping basic functionality

interface PluginAPI {
  addComponents: (components: Record<string, any>) => void;
}

export function prelinePlugin({ addComponents }: PluginAPI) {
  addComponents({
    '.hs-dropdown': {
      position: 'relative',
      display: 'inline-block',
    },
    '.hs-collapse': {
      'transition-property': 'height, width',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '300ms',
    },
    '.hs-collapse-open': {
      display: 'block',
    },
    '.hs-collapse-close': {
      display: 'none',
    },
    '.hs-tooltip': {
      position: 'relative',
      display: 'inline-block',
    },
    '.hs-tab': {
      display: 'none',
    },
    '.hs-tab-active': {
      display: 'block',
    },
  });
}

export default prelinePlugin; 