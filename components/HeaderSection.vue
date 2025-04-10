<template>  
    <!-- Header/Navigation -->
    <header class="fixed top-0 left-0 w-full px-24 bg-gray-900 bg-opacity-90 z-50 border-b border-gray-800">
      <div class="container mx-auto py-4">
        <div class="flex items-center justify-between">
          <div>
            <a href="#" class="text-yellow-400 text-3xl font-bold cursor-pointer">WD</a>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-sm font-medium text-gray-300 hover:text-white">About</a>
            <a href="#skills" class="text-sm font-medium text-gray-300 hover:text-white">Skills</a>
            <a href="#portfolio" class="text-sm font-medium text-gray-300 hover:text-white">Portfolio</a>
            <a href="#experience" class="text-sm font-medium text-gray-300 hover:text-white">Experience</a>
            <a href="#testimonial" class="text-sm font-medium text-gray-300 hover:text-white">Testimonial</a>
            <a href="#contact" class="text-sm font-medium text-gray-300 hover:text-white">Contact</a>
          </div>
          <div class="md:hidden">
            <button class="text-gray-300 hover:text-white">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
</template>

<script setup lang="ts">

</script>

