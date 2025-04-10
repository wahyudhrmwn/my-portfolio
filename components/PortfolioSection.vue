<template>
  <!-- Portfolio Section -->
  <section id="portfolio" class="py-20 bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold mb-4">Portfolio</h2>
        <div class="w-20 h-1 bg-yellow-400 mb-10"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Project 1 -->
          <div class="bg-gray-700 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div class="relative">
              <img src="https://placehold.co/600x400" alt="Project 1" class="w-full h-56 object-cover">
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href="#" class="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 transition">View Details</a>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Building Design</h3>
              <p class="text-gray-300 text-sm mb-4">Architectural visualization project with 3D rendering</p>
              <div class="flex items-center text-xs text-gray-400">
                <span class="mr-2 px-2 py-1 bg-gray-600 rounded-full">#Architecture</span>
                <span class="px-2 py-1 bg-gray-600 rounded-full">#3D</span>
              </div>
            </div>
          </div>
          
          <!-- Project 2 -->
          <div class="bg-gray-700 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div class="relative">
              <img src="https://placehold.co/600x400" alt="Project 2" class="w-full h-56 object-cover">
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href="#" class="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 transition">View Details</a>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Amazon Scrapper</h3>
              <p class="text-gray-300 text-sm mb-4">A Python tool for data extraction</p>
              <div class="flex items-center text-xs text-gray-400">
                <span class="mr-2 px-2 py-1 bg-gray-600 rounded-full">#Python</span>
                <span class="px-2 py-1 bg-gray-600 rounded-full">#API</span>
              </div>
            </div>
          </div>
          
          <!-- Project 3 -->
          <div class="bg-gray-700 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div class="relative">
              <img src="https://placehold.co/600x400" alt="Project 3" class="w-full h-56 object-cover">
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href="#" class="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 transition">View Details</a>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Modern Architecture</h3>
              <p class="text-gray-300 text-sm mb-4">Design for contemporary buildings</p>
              <div class="flex items-center text-xs text-gray-400">
                <span class="mr-2 px-2 py-1 bg-gray-600 rounded-full">#Design</span>
                <span class="px-2 py-1 bg-gray-600 rounded-full">#Modern</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mb-10">
          <!-- <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
            Build User Interfaces Develop Components : Create reusable and
            responsive UI components using modern web technologies and design patterns.
            Each project represents unique challenges and solutions in the field of design and development.
          </p> -->
          
          <a href="#" class="group inline-flex items-center gap-2 bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-md text-base font-medium hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1">
            View More Projects
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">

</script>




