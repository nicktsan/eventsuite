<template>
  <header class="flex p-2 items-center">
    <div>
      <a href="/" class="text-gray-600 hover:text-indigo-600 pl-2">Home</a>
    </div>
    <nav class="ml-auto flex gap-4 items-center p-2">
      <a href="#" class="text-gray-600 hover:text-indigo-600">Dashboard</a>
      <a href="/create-event" class="text-gray-600 hover:text-indigo-600">Create Event</a>
      <a href="#" class="text-gray-600 hover:text-indigo-600">Account</a>
      <Button
        label="New Event"
        class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2"
      />
    </nav>
  </header>
  <main class="content">
    <slot />
  </main>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>
