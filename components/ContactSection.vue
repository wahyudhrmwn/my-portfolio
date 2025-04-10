<template>
    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
        <div class="w-20 h-1 bg-yellow-400 mb-10"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <div class="flex flex-col space-y-8">
              <div class="flex items-start">
                <div class="bg-gray-800 p-3 rounded-lg mr-4">
                  <i class="far fa-envelope text-yellow-400"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:wahyu.dhrmwn08@gmail.com" class="text-gray-300 hover:text-white">wahyu.dhrmwn08@gmail.com</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-gray-800 p-3 rounded-lg mr-4">
                  <i class="fas fa-phone text-yellow-400"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:081311181366" class="text-gray-300 hover:text-white">0813-1118-1366</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-gray-800 p-3 rounded-lg mr-4">
                  <i class="fas fa-map-marker-alt text-yellow-400"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Location</h3>
                  <span class="text-gray-300">Cirebon, Indonesia</span>
                </div>
              </div>
            </div>
            
            <div class="mt-10">
              <h3 class="text-lg font-semibold mb-4">Follow Me</h3>
              <div class="flex space-x-4">
                <a href="https://www.instagram.com/wahyudhrmwn" class="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/wahyu-dharmawan/" class="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/wahyudhrmwn" class="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-gray-800 p-8 rounded-lg">
            <h3 class="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form>
              <div class="mb-6">
                <label for="name" class="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" class="bg-gray-700 border-0 rounded-lg w-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name">
              </div>
              
              <div class="mb-6">
                <label for="email" class="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" class="bg-gray-700 border-0 rounded-lg w-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your email">
              </div>
              
              <div class="mb-6">
                <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" class="bg-gray-700 border-0 rounded-lg w-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Subject">
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="4" class="bg-gray-700 border-0 rounded-lg w-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your message"></textarea>
              </div>
              
              <button type="submit" class="w-full bg-yellow-400 text-gray-900 py-3 px-4 rounded-lg text-sm font-medium hover:bg-yellow-500 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">

</script>


