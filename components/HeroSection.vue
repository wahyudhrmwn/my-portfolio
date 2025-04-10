<template>
    <!-- Hero Section -->
    <section class="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div class="flex-1 order-2 lg:order-1">
            <div class="mb-4">
              <p class="text-lg mb-2">I'M</p>
              <h1 class="text-5xl font-bold text-yellow-400 mb-4">Wahyu Dharmawan</h1>
              <p class="text-xl text-gray-300 mb-1">Frontend Developer</p>
              <!-- <p class="text-xl text-gray-300 mb-6">Consultant</p> -->
              <a href="#contact" class="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-4 mt-4 inline-block rounded hover:bg-yellow-400 hover:text-gray-900 transition">
                Contact Me
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-4 text-gray-400 mt-8">
              <a href="mailto:wahyu.dhrmwn08@gmail.com" class="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/wahyudhrmwn" class="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/wahyu-dharmawan/" class="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/6281311181366" class="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div class="flex-1 order-1 lg:order-2">
            <img src="@/assets/profil.png" alt="Profile Photo" class="w-full max-w-md mx-auto rounded-lg shadow-xl">
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">

</script>

