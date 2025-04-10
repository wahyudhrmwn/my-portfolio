<template>
  <div class="bg-gray-900 text-white">
    <HeaderSection />

    <HeroSection />

    <AboutSection />

    <SkillSection />

    <PortfolioSection />

    <ExperienceSection />

    <TestimonialSection />

    <ContactSection />  

<FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import HeaderSection from '@/components/HeaderSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillSection from '@/components/SkillSection.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';

// Add Font Awesome for icons
onMounted(() => {
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css';
  document.head.appendChild(fontAwesome);
});
</script>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #fbbf24;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style> 