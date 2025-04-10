<template>
  <div>
    <!-- Main Content -->
    <slot />
  </div>
</template>

<script setup lang="ts">
// Type declaration for HSStaticMethods
interface HSStaticMethodsType {
  autoInit: () => void;
}

// Preline initialization is now handled by the plugins/preline.client.ts plugin
// No need for additional initialization code here

// Optional: Trigger Preline initialization on route changes if needed
const route = useRoute();
watch(() => route.path, () => {
  nextTick(() => {
    // Dispatch a custom event that our plugin listens for
    if (process.client && window.HSStaticMethods) {
      document.dispatchEvent(new Event('hs.tab-reset'));
      (window.HSStaticMethods as HSStaticMethodsType).autoInit();
    }
  });
}, { immediate: false });
</script>

