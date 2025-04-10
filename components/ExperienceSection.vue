<template>
  <!-- Experience Section -->
  <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-3xl font-bold mb-4">Experience</h2>
      <div class="w-20 h-1 bg-yellow-400 mb-10"></div>

      <div class="relative">
        <!-- Timeline Line -->
        <div
          class="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"
        ></div>

        <!-- Experience Items -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Experience 1 - Left -->
          <div class="md:text-right md:pr-10 relative">
            <div class="absolute right-[-21px] top-0 md:block hidden">
              <div
                class="w-10 h-10 rounded-full border-4 border-gray-700 bg-gray-900 flex items-center justify-center z-10"
              >
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <div class="block md:hidden absolute left-[-21px] top-0">
              <div
                class="w-10 h-10 rounded-full border-4 border-gray-700 bg-gray-900 flex items-center justify-center z-10"
              >
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <div
              class="bg-gray-800 inline-block px-3 py-1 rounded-md text-sm mb-2"
            >
              Coming Soon
            </div>
            <h3 class="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p class="text-gray-400 mb-2">Unknow, Unknown</p>
            <p class="text-gray-400 text-sm leading-relaxed">
              Unknown
            </p>
          </div>

          <!-- Empty space for first row alignment -->
          <div class="hidden md:block"></div>

          <!-- Empty space for second row alignment -->
          <div class="hidden md:block"></div>

          <!-- Experience 2 - Right -->
          <div class="md:pl-10 relative">
            <div class="absolute left-[-21px] top-0">
              <div
                class="w-10 h-10 rounded-full border-4 border-gray-700 bg-gray-900 flex items-center justify-center z-10"
              >
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <div
              class="bg-gray-800 inline-block px-3 py-1 rounded-md text-sm mb-2"
            >
              Oktober 2021 - Until Now
            </div>
            <h3 class="text-xl font-semibold mb-1">Frontend Developer</h3>
            <p class="text-gray-400 mb-4">
              Bukit Makmur Mandiri Utama, Jakarta Selatan
            </p>
            <p class="text-gray-400 text-sm leading-relaxed">
              <strong>Build User Interfaces</strong> <br>
              Develop Components : Create reusable and maintainable UI components using Vue.js. <br>
              Type Safety : Write code with TypeScript to ensure it is type-safe and error-free. <br>
              
              <br>

              <strong>Implement Designs</strong> <br>
              Slicing Designs : Convert designs from Figma into functional web pages. <br>
              Design Fidelity : Work with the design team to ensure the UI matches the provided designs. <br>

              <br>

              <strong>Integrate APIs</strong> <br>
              API Calls : Connect the frontend with backend services using APIs. <br>
              Data Handling : Manage data from APIs and ensure it is displayed correctly on the UI. <br>

              <br>

              <strong>Test and Debug</strong> <br>
              Testing : Create and run tests to make sure everything works as expected. <br>
              Fix Bugs : Identify and resolve issues in the code and UI. <br>
              
              <br>

              <strong>Maintain and Document</strong> <br>
              Code Updates : Keep the code up-to-date and improve it as needed. <br>
              Documentation : Write clear documentation for the code and components you develop. <br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
