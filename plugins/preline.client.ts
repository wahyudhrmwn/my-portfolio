// Add TypeScript interface for window with HSStaticMethods
declare global {
  interface Window {
    HSStaticMethods?: {
      autoInit: () => void;
    };
  }
}

// Import Preline JS for client-side interactions, not for the plugin
try {
  // Only import in client-side environment
  if (typeof window !== 'undefined') {
    import('preline/dist/preline.js').then((module) => {
      // Initialize HSOverlay, HSDropdown, etc. if available
      document.addEventListener('DOMContentLoaded', () => {
        if (window.HSStaticMethods) {
          window.HSStaticMethods.autoInit();
        }
      });
    }).catch(error => {
      console.warn('Preline JS import failed, using basic functionality only:', error);
    });
  }
} catch (error) {
  console.warn('Preline JS import error:', error);
}

export default defineNuxtPlugin(() => {
  // Re-initialize on page changes
  if (typeof window !== 'undefined') {
    const initPreline = () => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };
    
    window.addEventListener('hs.tab-reset', initPreline);
    
    // Hook into Nuxt page transitions
    const nuxtApp = useNuxtApp();
    nuxtApp.hook('page:finish', () => {
      setTimeout(initPreline, 200);
    });
  }
});
